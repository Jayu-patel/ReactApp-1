import { useEffect, useState } from "react";

const Cat = () => {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    const key ="live_tImLeo4OWAXw3SmAMajWtCuzmrSrtc3ZnPW9mLjiqfNxbKTKdiGMFw8ycYrMRIJx"
    let str = ""
    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=30`, {
         headers: {
            "x-api-key": key,
        },
        })
        .then((res) => res.json())
        .then((json) => {
            setData(json)
            setLoad(true)
        })
    }, [])
    return (
      load ? <>
        {data.map((e) => (
          <div className="cards" key={e.id}>
            <div className="image2">
              <img src={e.url} alt=" " />
            </div>
            <div className="detail">
              <div className="btn-sec">
                <div><i className="fa fa-heart" aria-hidden="true"></i> {e.width / 10}k</div>
              </div>

              <div className="btn-sec">
                <div><i className="fa fa-commenting-o" aria-hidden="true"></i> {e.width / 20 }k</div>
              </div>

              <div className="btn-sec">
                <div><i className="fa fa-share" aria-hidden="true"></i> {(e.width / 20) - 10}k</div>
              </div>
            </div>
          </div>
        ))}
      </> : 
      <div className="spin">
      <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  </div>
    )
}

export default Cat
