/**
 * Builds a CSS `polygon()` that follows a hand-placed outline and roughens
 * selected edges so they look like torn paper.
 *
 * @param {Array<[number, number]>} vertices Outline points in % of the element box, clockwise.
 * @param {Array<number>} roughness Tear depth (in %) for each edge `vertices[i] → vertices[i + 1]`. 0 keeps it straight.
 * @param {number} seed Any integer; the same seed always produces the same edge.
 * @returns {string}
 */
export function tornPolygon(vertices, roughness = [], seed = 1) {
    const random = createRandom(seed);
    const points = [];

    vertices.forEach((start, index) => {
        const end = vertices[(index + 1) % vertices.length];
        const depth = roughness[index] ?? 0;

        points.push(start);

        if (depth <= 0) {
            return;
        }

        const [dx, dy] = [end[0] - start[0], end[1] - start[1]];
        const length = Math.hypot(dx, dy) || 1;
        // Inward normal for a clockwise outline in screen coordinates.
        const [nx, ny] = [-dy / length, dx / length];
        const steps = Math.max(6, Math.round(length / 2.2));

        for (let step = 1; step < steps; step++) {
            const t = step / steps;
            const tear = depth * random() ** 1.6;

            points.push([start[0] + dx * t + nx * tear, start[1] + dy * t + ny * tear]);
        }
    });

    return `polygon(${points.map(([x, y]) => `${clamp(x)}% ${clamp(y)}%`).join(', ')})`;
}

function clamp(value) {
    return Math.min(100, Math.max(0, value)).toFixed(2);
}

/** Small deterministic PRNG (mulberry32) so torn edges stay identical between renders. */
function createRandom(seed) {
    let state = seed >>> 0;

    return () => {
        state = (state + 0x6d2b79f5) >>> 0;
        let value = state;
        value = Math.imul(value ^ (value >>> 15), value | 1);
        value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
}
