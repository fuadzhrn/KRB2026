/**
 * One member pasted onto the Members hero collage. The sticker PNG already
 * carries a white outline that follows the silhouette.
 */
export default function HeroMemberCutout({ member }) {
    if (!member.image) {
        return null;
    }

    return (
        <figure className={`mh-el mh-member mh-member--${member.layer} mh-member--${member.slot}`}>
            <img
                src={member.image.src}
                alt={`Foto ${member.elName}`}
                width={member.image.width}
                height={member.image.height}
                loading="eager"
                decoding="async"
                draggable="false"
            />
        </figure>
    );
}
