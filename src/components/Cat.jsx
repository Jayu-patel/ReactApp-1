import { useContext } from "react";
import { AppContext } from "./context";

const Cat = () => {

  const {post, data, load2} = useContext(AppContext)
    return (

      load2 ? <div>
        {data.map((e,i) => (
          <div className="cards" key={e.id}>
            <div className="head">
              <div className="head-img">
                <img src={post[i].image} alt=" " />
              </div>
              <div className="head-detail">
                <h2>{post[i].firstName} {post[i].lastName}</h2>
                <p> {Number(e.width / 10).toFixed(0)} minutes ago</p>
              </div>
            </div>
            <div className="image2">
              <img src={e.url} alt=" " />
            </div>
            <div className="detail">
              <div className="btn-sec">
                <div><i className="fa fa-heart heart" aria-hidden="true"></i> {Number(e.width / 10).toFixed(0)}k</div>
              </div>

              <div className="btn-sec">
                <div><i className="fa fa-commenting-o" aria-hidden="true"></i> {Number(e.width / 14).toFixed(2)}k</div>
              </div>

              <div className="btn-sec">
                <div><i className="fa fa-share" aria-hidden="true"></i> {(Number(e.width / 17).toFixed(2))}k</div>
              </div>
            </div>
          </div>
        ))}
      </div> :  
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
