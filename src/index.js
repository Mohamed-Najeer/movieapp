import React from 'react';
import ReactDOM from 'react-dom';
import ScrollContainer from 'react-indiana-drag-scroll';
import './styles/index.css';
import film from './svg/coloredfilm.svg';

class Home extends React.Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row">
      <div className="sidemenubg col-sm-2 col-md-2 col-lg-2 col-xl-2">
          <nav className="navbar navbar-light fixed-top navbar-expand-sm px-0 flex-row flex-nowrap">
               <div className="navbar-collapse collapse" id="navbarWEX">
                  <div className="sidemenu nav flex-sm-column flex-column">
                  <a href="#" className="pt-3 pb-5 px-2 px-lg-4 px-xl-5"><img className="pr-2" src={film} width="30px"/><span className="pr-1">Movie</span><span>App</span></a>
                      <a className="nav-item nav-link active pt-4 px-3 px-lg-4 px-xl-5" href="#"><div className="sidecircle"></div><i className="fa fa-film pr-2"></i>Now showing</a>
                      <a href="#" className="nav-item nav-link px-3 px-lg-4 px-xl-5"><div className="sidecircle"></div><i className="fa fa-ticket pr-2"></i>My tickets</a>
                      <a href="#" className="nav-item nav-link px-3 px-lg-4 px-xl-5"><div className="sidecircle"></div><i className="fa fa-user pr-2"></i>Profile</a>
                  </div>
              </div>
              <button className="fixed-top navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarWEX" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
          </nav>
      </div>
      <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 pt-5">
      <div className="container">
    <div className="d-flex">
      <div className="flex-grow-1 font-weight-bold h5">Now showing</div>      
      <div><i className="px-2 fa fa-search"></i></div>      
      <div><i className="px-2 fa fa-bell"></i></div>      
    </div>
    <p>Retro occupy organic, stumptown shabby chic pour-over roof part.</p>
<ScrollContainer className="scroll-container">
<ul className="firstrow list-group list-group-horizontal">
  <li className="list-group-item">
  <img src="../assets/img/shazamimg.jpg" width="400px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Shazam!</div>      
      <div className="px-2">143 min</div>      
      <div className="px-2">PG-13</div>      
    </div>
        <p>2019 - Action | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (341,611)</span>
      </div>
  </li>
  <li className="list-group-item">
  <img src="../assets/img/alita.jpg" width="400px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">alita : Battle Angel</div>      
      <div className="px-2">126 min</div>      
      <div className="px-2">PG-13</div>      
    </div>
        <p>2019 - Adventure | Comedy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>6.5 (12,463)</span>
      </div>
  </li>
  <li className="list-group-item">
  <img src="../assets/img/dumbo.jpg" width="400px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Dumbo</div>      
      <div className="px-2">143 min</div>      
      <div className="px-2">PG-13</div>      
    </div>
        <p>2019 - Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>6.5 (541,519)</span>
      </div>
  </li>
  <li className="list-group-item">
  <img src="../assets/img/aladdin.jpg" width="400px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Aladdin</div>      
      <div className="px-2">130 min</div>      
      <div className="px-2">PG-13</div>      
    </div>
        <p>2019 - Action | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>7.5 (41,611)</span>
      </div>
  </li>
  <li className="list-group-item">
  <img src="../assets/img/captain.jpg" width="400px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Captain Marvel</div>      
      <div className="px-2">143 min</div>      
      <div className="px-2">PG-13</div>      
    </div>
        <p>2019 - Action | Adventure</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (391,211)</span>
      </div>
  </li>
  <li className="list-group-item">
  <img src="../assets/img/hellboy.jpg" width="400px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Hellboy</div>      
      <div className="px-2">143 min</div>      
      <div className="px-2">PG-13</div>      
    </div>
        <p>2019 - Action | Adventure</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (341,611)</span>
      </div>
  </li>
 </ul>
</ScrollContainer>
<div className="d-flex pt-5">
      <div className="flex-grow-1 h5">Browse by category</div>      
    </div>
    <div className="row secondrow pb-5">
            <div className="col-sm-12">
              <div className=" px-0 tabContent py-0">
                <ul className="nav" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#Action" role="tab" aria-controls="syllabus"
                      aria-selected="true">Action</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#Adventure" role="tab" aria-controls="parents"
                      aria-selected="false">Adventure</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#Fantasy" role="tab" aria-controls="teachers"
                      aria-selected="false">Fantasy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#Romance" role="tab" aria-controls="teachers"
                      aria-selected="false">Romance</a>
                  </li>
                </ul>
                <div className="tab-content mt-3 whyusPane" id="myTabContent" >
                  <div className="tab-pane fade show active" id="Action" role="tabpanel" aria-labelledby="schools-tab">
                  <ScrollContainer className="scroll-container">
<ul className="scndrow list-group list-group-horizontal">
  <li className="list-group-item">
 <img src="../assets/img/kk.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Karate Kid</div>      
      <div className="pl-1 vf">143 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Action | Adventure</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>9.5 (941,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/escape.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Escape</div>      
      <div className="pl-1 vf">143 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Action | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>7.5 (341,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/diehard.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">DieHard</div>      
      <div className="pl-1 vf">123 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Action </p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (741,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/police.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">The Police</div>      
      <div className="pl-1 vf">143 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Action | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>5.5 (341,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/atomicblonde.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">AtomicBlonde</div>      
      <div className="pl-1 vf">147 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Action | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>6.5 (141,509)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/rambo.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Rambo</div>      
      <div className="pl-1 vf">143 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Action </p>
    <div>
      <span><i className="fa fa-star pr-2"></i>9.5 (941,901)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/transporter.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Transporter</div>      
      <div className="pl-1 vf">143 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Action | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (351,655)</span>
      </div>
  </li>
</ul>
</ScrollContainer>
                  </div>
                  <div className="tab-pane fade" id="Adventure" role="tabpanel" aria-labelledby="parents-tab">
                  <ScrollContainer className="scroll-container">
<ul className="scndrow list-group list-group-horizontal">
  <li className="list-group-item">
 <img src="../assets/img/soul.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Soul</div>      
      <div className="pl-1 vf">167 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Action | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>6.5 (401,690)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/godzilla.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Godzilla</div>      
      <div className="pl-1 vf">145 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Action | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (341,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/otw.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Outside</div>      
      <div className="pl-1 vf">203 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Adventure | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (541,771)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/wonderwoman.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">WonderWoman</div>      
      <div className="pl-1 vf">165 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Adventure | Action </p>
    <div>
      <span><i className="fa fa-star pr-2"></i>7.9 (741,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/kk.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">KingKong</div>      
      <div className="pl-1 vf">143 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Adventure | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (341,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/deadpool.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Deadpool</div>      
      <div className="pl-1 vf">179 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Adventure | Comedy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>9.5 (1,341,019)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/kk.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">KingKong</div>      
      <div className="pl-1 vf">183 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Adventure | Action</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (341,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/dune.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Dune</div>      
      <div className="pl-1 vf">193 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Adventure | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>9.5 (741,611)</span>
      </div>
  </li>
</ul>
</ScrollContainer>
                  </div>
                  <div className="tab-pane fade" id="Fantasy" role="tabpanel" aria-labelledby="teachers-tab">
                  <ScrollContainer className="scroll-container">
<ul className="scndrow list-group list-group-horizontal">
  <li className="list-group-item">
 <img src="../assets/img/aquaman.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Aquaman</div>      
      <div className="pl-1 vf">193 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Fantasy | Action</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>6.5 (341,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/mowgli.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Mowgli</div>      
      <div className="pl-1 vf">112 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (41,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/cindrella.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Cindrella</div>      
      <div className="pl-1 vf">103 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Fantasy | Adventure</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>9.5 (741,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/dolittle.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Do Little</div>      
      <div className="pl-1 vf">143 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Fantasy | Action</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (546,699)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/pp.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">PowerProject</div>      
      <div className="pl-1 vf">188 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2020 - Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>5.5 (401,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/onward.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Onward</div>      
      <div className="pl-1 vf">243 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
    <p>2019 - Fantasy | Romance</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (341,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/bright.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Bright</div>      
      <div className="pl-1 vf">173 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Fantasy | Action</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (341,611)</span>
      </div>
  </li>
</ul>
</ScrollContainer>
                  </div>
                  <div className="tab-pane fade" id="Romance" role="tabpanel" aria-labelledby="teachers-tab">
                  <ScrollContainer className="scroll-container">
<ul className="scndrow list-group list-group-horizontal">
  <li className="list-group-item">
 <img src="../assets/img/titanic.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Titanic!</div>      
      <div className="pl-1 vf">153 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Romance | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>9.5 (1,041,611)</span>
      </div>
  </li>
  <li className="list-group-item">
  <img src="../assets/img/priceless.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Priceless</div>      
      <div className="pl-1 vf">143 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Romance</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (441,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/closer.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Closer</div>      
      <div className="pl-1 vf">144 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Romance | Adventure</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (341,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/malena.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Malena</div>      
      <div className="pl-1 vf">173 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Romance</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>6.5 (34,661)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/theproposal.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">The Proposal</div>      
      <div className="pl-1 vf">123 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Romance | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (41,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/prettywoman.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">PrettyWoman</div>      
      <div className="pl-1 vf">103 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Romance | Action</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>8.5 (991,611)</span>
      </div>
  </li>
  <li className="list-group-item">
 <img src="../assets/img/loveactually.jpg" width="150px" height="200px"/>
  <div className="d-flex pt-2">
      <div className="flex-grow-1 h5">Love Actually</div>      
      <div className="pl-1 vf">193 min</div>      
      <div className="pl-1 vf">PG-13</div>      
    </div>
        <p>2019 - Romance | Fantasy</p>
    <div>
      <span><i className="fa fa-star pr-2"></i>6.5 (101,921)</span>
      </div>
  </li>
</ul>
</ScrollContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
    </div>
    )
  } 
}
ReactDOM.render(<Home/>, document.getElementById('root'));