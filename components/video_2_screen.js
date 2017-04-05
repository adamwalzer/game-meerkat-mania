const src = `${CMWN.MEDIA.VIDEO}meerkat-move.mp4`;

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video-2"
            startDelay={0}
        >
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Video src={src} />
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
