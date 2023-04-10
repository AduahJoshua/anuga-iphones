
const Types = () => {
    return (
      <div>
      
    <h2 className="yup">Which iPhone is right for you?</h2><br /><br />


<div className="container-fluid" id="big">
<div className="row">
    <div className="col-md-3">
        <div className="card" style={{width: "18rem;"}}>
          <img src="pictures/xs.jpeg" className="img-responsive" alt="" />
          <div className="card-body">
        <h3 className="card-title">iPhone Xs max</h3>
        <p className="card-text"><span style={{fontWeight: "bolder"}}>The ultimate iPhone</span><br /><br />From $400</p>
        <a href="#" className="btn btn-primary">Buy</a>
      </div>
    </div>
    </div>

    <div className="col-md-3">
        <div className="card" style={{width: "18rem;"}}>
              <img src="pictures/sev.jpeg" className="img-responsive" alt="" />
              <div className="card-body">
                <h3 className="card-title">iPhone 7 Plus</h3>
            <p className="card-text"><span style={{fontWeight: "bolder"}}>A total powerhouse<br /><br />From $250</span></p>
                <a href="#" className="btn btn-primary">Buy</a>
          </div>
        </div>
    </div>

    <div className="col-md-3">
        <div className="card" style={{width: "18rem;"}}>
          <img src="pictures/ele.jpg" className="img-responsive" alt="" />
          <div className="card-body">
            <h3 className="card-title">iPhone 11 pro</h3>
        <p className="card-text"><span style={{fontWeight: "bolder;"}}>As amazing as ever.</span><br /><br />From $600</p>
        <a href="#" className="btn btn-primary">Buy</a>
          </div>
        </div>
    </div>

    <div className="col-md-3">
        <div className="card" style={{width: "18rem"}}>
          <img src="pictures/six.jpeg" className="img-responsive" alt="" /><br />
          <div className="card-body">
        <h3 className="card-title">iPhone 6s</h3>
            <p className="card-text"><span style={{fontWeight: "bolder"}}>Serious power. Serious value.</span><br /><br />From $150</p>
        <a href="#" className="btn btn-primary">Buy</a>
          <br />
        </div>
    </div>
</div>
</div><br /><br /><br />
    </div>
    </div>
    );
}
export default Types;