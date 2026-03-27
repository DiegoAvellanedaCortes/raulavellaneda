import { useEffect, useState } from "react";
import "../sectionYoutube/sectionYoutube.css";

function SectionYoutube() {
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const [videoSeleccionado, setVideoSeleccionado] = useState(null);

    useEffect(() => {
        const url = process.env.REACT_APP_URL_API + "/consultaVideos";
        console.log(url);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(data => {
                setVideos(data);
                setVideoSeleccionado(data[0]);
                setLoading(false);
            })
    }, []);

    return (
        <>
            {loading && (
                <div>
                    <h3>Cargando...</h3>
                </div>
            )
            }

            {!loading && (
                <div className="sectionYoutube">
                    <div className="video_principal">
                        <iframe
                            width="auto"
                            height="200"
                            src={`https://www.youtube.com/embed/${videoSeleccionado.resourceId.videoId}`}
                            title="YouTube video player"
                        ></iframe>
                        <h3>{videoSeleccionado.title}</h3>
                    </div>
                    <div className="videos_secundarios">
                        {videos.map((video) => {

                            if (video === videoSeleccionado) {
                                return null;
                            }
                            return (
                                <div
                                    className="card_video"
                                    onClick={()=>{
                                        setVideoSeleccionado(video);
                                    }}
                                >
                                    <img src={video.thumbnails.high.url} alt={video.title} />
                                    <p key={video.title}>{video.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div >
            )}
        </>
    );
}

export { SectionYoutube }