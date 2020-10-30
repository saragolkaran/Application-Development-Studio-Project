import React from 'react';
import './Data.css';


const DataViewer: React.FC = () => {
  return (
    <body>
      <div className="container">
        <strong>Basic</strong>
      </div>
      <form id="basic-data-filter-form" >
        <div className="form-row">
          <div className="col-4">
            <input
              type="number"
              key="performanceId"
              className="form-control"
              placeholder="Performance Id"
            />
          </div>
          <div className="col-4 ">
            <input
              type="number"
              key="festivalId"
              className="form-control"
              placeholder="Festival Id"
            />
          </div>
          <div className="col-4">
            <input type="number" className="form-control" placeholder="StartTime" key="startTime__gt" />
          </div>
          <div className="col-4 pt-2">
            <input type="number" className="form-control" placeholder="EndTime" key="endTime" />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </div>
      </form>

      <div className="container">
        <table className="table mt-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Performance Id</th>
              <th scope="col">Festival Id</th>
              <th scope="col">StartTime</th>
              <th scope="col">EndTime</th>
            </tr>
          </thead>
          <tbody id="basic-data-tbody">
          </tbody>
        </table>
        <div>
        </div>
      </div>

      <br></br>

      <div className="container">
        <strong>Advance</strong>
      </div>
      <div className="container">
        <table className="table mt-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Performance Id</th>
              <th scope="col">Festival Id</th>
              <th scope="col">StartTime</th>
              <th scope="col">EndTime</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
          <tbody id="basic-data-tbody">
          </tbody>
        </table>
        <div>
        </div>
      </div>
      
      <script
        src="https://code.jquery.com/jquery-3.5.1.js"
        type="text/javascript"
      ></script>
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      ></script>
      <script src="SARYL/public/assets/js/data.js"></script>
    </body>
  );
};

export default DataViewer;
