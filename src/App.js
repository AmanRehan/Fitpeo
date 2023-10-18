import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import money from './money1.jpeg';
import bar from './barchart.png'
import pie from './pie.png'
import face from './face3.png'
import wallet from './wallet.png'
import economics from './economic.png'
import agree from './agree.png'

function App() {
  return (
    <div className="">
      <div className='container-fluid'>
        <div id='view' className='row'>
          <div id='sidebar' className='col-2 border border-primary d-flex justify-content-center text-center'>
            <div className='container-fluid justify-content-center text-white'>
              <div className='row my-4 '> 
                <h3>
                  Dashboard
                </h3>
              </div>
              <div id="dashOptions" className='row my-4 d-flex justify-content-center align-items-center'>
                <div class="list-group">
                  <a href="#Dashboard" class="list-group-item list-group-item-action active py-3 listing" aria-current="true">Dashboard</a>
                  <a href="#Product" class="list-group-item list-group-item-action py-3 listing text-white">Product</a>
                  <a href="#Customers" class="list-group-item list-group-item-action py-3 listing text-white">Customers</a>
                  <a href="#Income" class="list-group-item list-group-item-action py-3 listing text-white">Income</a>
                  <a href="#Promote" class="list-group-item list-group-item-action py-3 listing text-white">Promote</a>
                  <a href="#Help" class="list-group-item list-group-item-action py-3 listing text-white">Help</a>
                </div>
              </div>
              <div id='profile' className='row d-flex justify-content-center text-center'>
                <div className='col-4 customimg d-flex justify-content-center align-items-center'>
                  <img src={face} className='img-fluid profile' alt='...'/>
                </div>
                <div className='col-8'>
                  <div  className='row'><b id='profileTitle'>Aman Rehan</b></div>
                  <div className='row d-flex allign-items-start flex-row'><small id='profileDesignation'>Front-end Engineer</small></div>
                </div>
              </div>
            </div>
          </div>

          <div id='dash' className='col-10'>
            <div id='header-name' className='col'>
              <div  className='row m-3 d-flex justify-content-between align-items-center'>
                <div className='col-2 name'><b>Hello Aman,</b></div>
                  <div className='col-2 search'>
                      <div class="input-group rounded">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                          <span class="input-group-text border-0" id="search-addon">
                            <i class="bi bi-search"></i>
                          </span>
                    </div>
                </div>
            </div>

              <div  className='row m-3'>
                <div className='col-3'>
                  <div id='info-card' class="card mb-3 d-flex justify-content-center align-items-center">
                    <div class="row g-0">
                      <div class="col d-flex justify-content-center align-items-center ">
                        <img src={money} class="img-fluid rounded-start" alt="money.png"/>
                      </div>
                      <div class="col">
                        <div class="card-body">
                        <p class="card-text my-0 pt-4"><small class="text-body-secondary">Earning</small></p>
                        <h1 id='card-num' class="card-title my-0"><b>$298k</b></h1>
                        <p class="card-text my-0 fw-bold"><span className='text-success'>36.8% </span>this month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                <div id='info-card' class="card mb-3 d-flex justify-content-center align-items-center">
                    <div class="row g-0">
                      <div class="col justify-content-middle">
                        <img src={wallet} class="img-fluid rounded-start" alt="money.png"/>
                      </div>
                      <div class="col">
                        <div class="card-body">
                        <p class="card-text my-0 pt-4"><small class="text-body-secondary">Orders</small></p>
                        <h1 id='card-num' class="card-title my-0"><b>$56.6k</b></h1>
                        <p class="card-text my-0 fw-bold"><span className='text-danger'>19.1% </span>this month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                <div id='info-card' class="card mb-3 d-flex justify-content-center align-items-center">
                    <div class="row g-0">
                      <div class="col justify-content-middle">
                        <img src={agree} class="img-fluid rounded-start" alt="money.png"/>
                      </div>
                      <div class="col">
                        <div class="card-body">
                        <p class="card-text my-0 pt-4"><small class="text-body-secondary">Balance</small></p>
                        <h1 id='card-num' class="card-title my-0"><b>$4.2k</b></h1>
                        <p class="card-text my-0 fw-bold"><span className='text-danger'>11.7% </span>this month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                <div id='info-card' class="card mb-3 d-flex justify-content-center align-items-center">
                    <div class="row g-0">
                      <div class="col justify-content-middle">
                        <img src={economics} class="img-fluid rounded-start" alt="money.png"/>
                      </div>
                      <div class="col">
                        <div class="card-body">
                        <p class="card-text my-0 pt-4"><small class="text-body-secondary">Total Sales</small></p>
                        <h1 id='card-num' class="card-title my-0"><b>$103k</b></h1>
                        <p class="card-text my-0 fw-bold"><span className='text-success'>23.8% </span>this month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              <div id='dash2' className='row m-3 justify-content-between'>
                <div className='col-7 me-0 rounded bg-white'>
                    <div className='row justify-content-between'>
                      <div className='col-3'>
                        <h4 id='card-num' class="card-title my-0"><b>Overview</b></h4>
                        <p class="card-text my-0 pt-0"><small class="text-body-secondary">Monthly Earning</small></p>
                      </div>
                      <div className='col-3 d-flex justify-content-end align-items-center'>
                        <div class="dropdown ">
                          <button class="btn btn-primary dropdown-toggle px-6 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Quaterly
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#quaterly">Quaterly</a></li>
                            <li><a class="dropdown-item" href="#monthly">Monthly</a></li>
                            <li><a class="dropdown-item" href="#anually">Yearly</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className='row justify-content-center'>
                        <img id='barimg' src={bar} class="img-fluid rounded-start" alt="money.png"/>
                      </div>
                    </div>
                </div>
                <div className='col-4 rounded bg-white '>
                    <div className='col'>
                      <h4 id='card-num' class="card-title my-0"><b>Customers</b></h4>
                      <p class="card-text my-0 pt-0"><small class="text-body-secondary">Customers that buy products</small></p>
                    </div>
                    <div className='col'>
                      <div  className='row justify-content-center'>
                        <img id='pieimg' src={pie} class="img-fluid rounded-start" alt="money.png"/>
                      </div>
                    </div>
                </div>
              </div>





              <div  className='row bg-white rounded m-3'>
                <div className='row'>
                  <div className='col-8'>
                  <h4 id='card-num' class="card-title my-0"><b>Product Sell</b></h4>
                  </div>
                  <div className='col-2'>
                  <div class="input-group rounded">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                          <span class="input-group-text border-0" id="search-addon">
                            <i class="bi bi-search"></i>
                          </span>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div class="dropdown ">
                        <button class="btn btn-white dropdown-toggle px-6 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Last 30 Days
                        </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#quaterly">Quaterly</a></li>
                            <li><a class="dropdown-item" href="#monthly">Monthly</a></li>
                            <li><a class="dropdown-item" href="#anually">Yearly</a></li>
                          </ul>
                      </div>
                  </div>

                </div>
                <div className='row '>
                <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total Sales</th>
                        <th scope="col">Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td><b>Abstract 3D</b></td>
                        <td>32 in stock</td>
                        <td><b>$45.99</b></td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td><b>Sarphens Illusion</b></td>
                        <td>32 in Stock</td>
                        <td><b>$40.99</b></td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2"><b>Solar Sapphire</b></td>
                        <td><b>$99.99</b></td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td><b>Prism Illusion</b></td>
                        <td>16 in Stock</td>
                        <td><b>$70.99</b></td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
