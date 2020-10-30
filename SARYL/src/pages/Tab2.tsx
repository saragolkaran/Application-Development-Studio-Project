import React, { useEffect, useState } from 'react';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonSelect, IonSelectOption, IonSearchbar , isPlatform} from '@ionic/react';
import './Tab1.css';

function getBasicResult( festivalId: any, setTableData: any) {
  var basicResultUrl = 'https://saryl-test.herokuapp.com/basic/result?';

  if (festivalId) {
    basicResultUrl += ("festivalId=" + festivalId);
  }

  //continue for pagesize......
  console.log(basicResultUrl)
  fetch(basicResultUrl)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result.result)
        setTableData(result.result) //tableData = result

        if(isPlatform('android')){
          NativeStorage.setItem(basicResultUrl, {result: result})
          .then(
            () => console.log("item is placed here : " + basicResultUrl),
            error => console.error('error on storing result', error)
          )
        }
 
       })
       .catch((error) => {
         console.log(error);
         if(isPlatform('android')){
           NativeStorage.getItem(basicResultUrl)
           .then(
             resultData => {console.log(resultData);
             setTableData(resultData.result)
           },
             error => console.error('error on storing result', error)
           )
         }
      })
    .catch((error) => {
      console.log(error);
    })
}

function getAdvanceResult(  festivalId: any, setTableAdvanceData: any, setTotalPop: any) {
  var advanceResultUrl = 'https://saryl-test.herokuapp.com/advance/result?';
  if (festivalId) {
    advanceResultUrl += ("festivalId=" + festivalId + "&");
  }

  console.log(advanceResultUrl)
  fetch(advanceResultUrl)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result.result)
        setTableAdvanceData(result.result) //tableData = result
        var totalPopularity = 0;
        for (var p=0;p<result.result.length;p++) {
          totalPopularity += result.result[p].popularity;
        }
        setTotalPop(totalPopularity);

        if(isPlatform('android')){
          NativeStorage.setItem(advanceResultUrl, {result: result.result})
          .then(
            () => console.log("item is placed here : " + advanceResultUrl),
            error => console.error('error on storing result', error + "error here")
          )
        }
 
       })
       .catch((error) => {
         console.log(error);
         if(isPlatform('android')){
           NativeStorage.getItem(advanceResultUrl)
           .then(
             resultData => {console.log(resultData);
             setTableAdvanceData(resultData.result)
           },
             error => console.error('error on storing result', error + "error here")
           )
         }
      })
    .catch((error) => {
      console.log(error);
    })
}


const Tab2: React.FC = () => {
  // define variables in the state
  // const [var_name, set_hook] = useState(default_value);
  // const [error, setError] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [tableAdvanceData, setTableAdvanceData] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [festivalId, setFestivalId] = useState('');
  const [endTime, setEndTime] = useState('');
  const [totalPopularity, setTotalPop]= useState(0);

  useEffect(() => { //on page load
    // getBasicResult( festivalId, setTableData);
    // getAdvanceResult( festivalId, setTableAdvanceData);
  }, [])



  return (
    <IonPage className="Body">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Result Viewer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ResultViewer</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="containerSearch">
          {/*  <form>
            <input type="number" placeholder="PerformanceID" className="spacing"/>
            <input type="number" placeholder="FestivalID" className="spacing"/>
            <input type="number" placeholder="StartTime" className="spacing"/>
            <input type="number" placeholder="EndTime" className="spacing"/>
            <button className="submitBtn" type="submit" onClick={() => {
              
            }}>Submit</button>
          </form> */}
          <div className="alignRow">
            <IonSearchbar
              inputmode="numeric"
              // id="searchBarA"
              className="searchInput"
              value={festivalId}
              onIonChange={(e) => {
                setFestivalId(e.detail.value!);
              }}
              show-cancel-button="never"
              placeholder="festivalId"
            ></IonSearchbar>
          </div>
          <IonButton className="IonBtn" onClick={() => {
            getBasicResult(festivalId, setTableData);
          }}>Search</IonButton>

        </div>

        <div className="container">
          <table>
            <thead >
              <tr>
                <th colSpan={4} >StartTime - EndTime</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item: any) => (
                <tr key={item.performanceId}>
                  <td>{item.performanceId} : {item.startTime} - {item.endTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
        </div>


<br></br>

        {/* ADVANCE  */}



        <div className="containerSearch">
          {/*  <form>
            <input type="number" placeholder="PerformanceID" className="spacing"/>
            <input type="number" placeholder="FestivalID" className="spacing"/>
            <input type="number" placeholder="StartTime" className="spacing"/>
            <input type="number" placeholder="EndTime" className="spacing"/>
            <button className="submitBtn" type="submit" onClick={() => {
              
            }}>Submit</button>
          </form> */}
          <div className="alignRow">
            <IonSearchbar
              inputmode="numeric"
              // id="searchBarA"
              className="searchInput"
              value={festivalId}
              onIonChange={(e) => {
                setFestivalId(e.detail.value!);
              }}
              show-cancel-button="never"
              placeholder="festivalId"
            ></IonSearchbar>
          </div>
          <IonButton className="IonBtn" onClick={() => {
            getAdvanceResult(festivalId, setTableAdvanceData, setTotalPop);
          }}>Search</IonButton>

        </div>

        <div className="container">
          <table>
            <thead >
              <tr>
                <th colSpan={4} >StartTime - EndTime</th>
              </tr>
            </thead>
            <tbody>
              {tableAdvanceData.map((item: any) => (
                <tr key={item.performanceId}>
                  <td>{item.performanceId} : {item.startTime} - {item.endTime} ({item.popularity})</td>
                </tr>
              ))}
            </tbody>
          </table>
          Total Popularity: {totalPopularity}
        </div>
        <div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
