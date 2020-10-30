import React, {useEffect, useState} from 'react';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonSelect,IonSelectOption, IonSearchbar, IonRow, isPlatform  } from '@ionic/react';
import './Tab1.css';

function getBasicData(pageSize:number, page:number, startTime:any, festivalId:any, setTableData:any) {
  var basicDataUrl = 'https://saryl-test.herokuapp.com/basic/data?';
  if (festivalId) {
    basicDataUrl += ("festivalId="+festivalId+"&");
  }
  if(page) {
    basicDataUrl += ("page=" +page +"&");
  }

  if(pageSize){
    basicDataUrl += ("pageSize="+pageSize + "&");
  }

  if(startTime){
    basicDataUrl += ("startTime__gt=" + startTime +"&");
  }
  //continue for pagesize......
  console.log(basicDataUrl)
  fetch(basicDataUrl)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)

        setTableData(result) //tableData = result

       if(isPlatform('android')){
         NativeStorage.setItem(basicDataUrl, {result: result})
         .then(
           () => console.log("item is placed here : " + basicDataUrl),
           error => console.error('error on storing result', error)
         )
       }

      })
      .catch((error) => {
        console.log(error);
        if(isPlatform('android')){
          NativeStorage.getItem(basicDataUrl)
          .then(
            resultData => {console.log(resultData);
            setTableData(resultData.result)
          },
            error => console.error('error on storing result', error)
          )
        }

      })
}

function getAdvanceData(pageSize:number, page:number, startTime:any, festivalId:any, endTime:any, setTableAdvanceData:any) {
  var advanceDataUrl = 'https://saryl-test.herokuapp.com/advance/data?';
  if (festivalId) {
    advanceDataUrl += ("festivalId="+festivalId+"&");
  }
  if(page) {
    advanceDataUrl += ("page=" +page +"&");
  }
   if(pageSize){
    advanceDataUrl += ("pageSize="+pageSize+"&");
   }
   if(startTime){
    advanceDataUrl += ("startTime__gt=" + startTime +"&");
  }
  if(endTime){
    advanceDataUrl += ("endTime__gt=" + endTime +"&");
  }
  
  console.log(advanceDataUrl)
  fetch(advanceDataUrl)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)

        setTableAdvanceData(result) //tableData = result
        if(isPlatform('android')){
          NativeStorage.setItem(advanceDataUrl, {result: result})
          .then(
            () => console.log("item is placed here : " + advanceDataUrl),
            error => console.error('error on storing result', error + "error here")
          )
        }
 
       })
       .catch((error) => {
         console.log(error);
         if(isPlatform('android')){
           NativeStorage.getItem(advanceDataUrl)
           .then(
             resultData => {console.log(resultData);
             setTableAdvanceData(resultData.result)
           },
             error => console.error('error on storing result', error + "Error here")
           )
         }
      })
      .catch((error) => {
        console.log(error);
      })
}



const Tab1: React.FC = () => {
  // define variables in the state
  // const [var_name, set_hook] = useState(default_value);
  // const [error, setError] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [tableAdvanceData, setTableAdvanceData] = useState([]);
  const [pageSize, setRows] = useState(5);
  const [page, setPage] = useState(0);
  const [startTime, setStartTime] = useState('');
  const [festivalId, setFestivalId] = useState('');
  const [endTime, setEndTime] =useState('');

  useEffect(()=>{ //on page load
    getBasicData(pageSize,page,startTime,festivalId,setTableData);
    getAdvanceData(pageSize,page,startTime,festivalId, endTime,setTableAdvanceData);
  },[])

 

  return (
    <IonPage className="Body">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Data Viewer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
         {/*  <form>
            <input type="number" placeholder="PerformanceID" className="spacing"/>
            <input type="number" placeholder="FestivalID" className="spacing"/>
            <input type="number" placeholder="StartTime" className="spacing"/>
            <input type="number" placeholder="EndTime" className="spacing"/>
            <button className="submitBtn" type="submit" onClick={() => {
              
            }}>Submit</button>
          </form> */}
            <IonRow>
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
                    <IonSearchbar 
                    inputmode="numeric"
                    // id="searchBarA"
                    className="searchInput"
                    value={startTime}
                    onIonChange={(e) => {
                      setStartTime(e.detail.value!);
                    }}
                    show-cancel-button="never"
                    placeholder="Start Time"
                  ></IonSearchbar>
            </IonRow>


            <IonButton className="IonBtn" onClick={()=>{
                     setPage(0);
                     getBasicData(pageSize,0,startTime,festivalId,setTableData);
                  }}>Search</IonButton>
       

        </div>
        <div className="container">
          <table >
            <thead >
              <tr>
                <th >Performance Id</th>
                <th >Festival Id</th>
                <th >StartTime</th>
                <th >EndTime</th>
              </tr>
            </thead>
            <tbody>
            {tableData.map((item:any) => (
                  <tr key={item.performanceid}>
                    <td>{item.performanceid}</td>
                    <td>{item.festivalid}</td>
                    <td>{item.starttime}</td>
                    <td>{item.endtime}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <div>
            <nav>
              <ul>
                <li>
                  {/* <IonButton className="IonBtn" onClick={()=>{
                     setPage(pageNum => pageNum);
                     getBasicData(pageSize,page,startTime,festivalId,setTableData);
                  }}>First</IonButton> */}
                </li>
                <li>
                  <IonButton className="IonBtn" onClick={()=>{
                     setPage(pageNum => pageNum - 1);
                     getBasicData(pageSize,page-1,startTime,festivalId,setTableData);
                  }}>Previous</IonButton>
                </li>
                <li>
                  <IonButton className="IonBtn" onClick={()=>{
                    setPage(pageNum => pageNum + 1);
                    getBasicData(pageSize,page+1,startTime,festivalId,setTableData);
                  }}>Next</IonButton>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>
        <div className="container">
        <IonSelect
        className="selection"
            value={pageSize}
            interface="popover"
            placeholder={(10).toString()}
            onIonChange={(e) => {
              setRows(e.detail.value);
              setPage(0);
              getBasicData(e.detail.value, 0,startTime,festivalId,setTableData);
              console.log(e.detail.value)
            }}
          >
            <IonSelectOption value={5}>
              {5}
            </IonSelectOption>
            <IonSelectOption value={10}>
              {10}
            </IonSelectOption>
           
            <IonSelectOption value={20}>
              {20}
            </IonSelectOption>
          </IonSelect>        </div>  


        
        {/*  ADVANCE FEATURE */}
        <br></br>
        <div className="container">
          <h1>ADVANCE</h1>
          <br></br>
          <IonRow>
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

                    <IonSearchbar 
                    inputmode="numeric"
                    // id="searchBarA"
                    className="searchInput"
                    value={startTime}
                    onIonChange={(e) => {
                      setStartTime(e.detail.value!);
                    }}
                    show-cancel-button="never"
                    placeholder="Start Time"
                  ></IonSearchbar>

                   <IonSearchbar 
                    inputmode="numeric"
                    // id="searchBarA"
                    className="searchInput"
                    value={endTime}
                    onIonChange={(e) => {
                      setEndTime(e.detail.value!);
                    }}
                    show-cancel-button="never"
                    placeholder="End Time"
                  ></IonSearchbar>
          </IonRow>

          <IonButton className="IonBtn" onClick={()=>{
                     setPage(0);
                     getAdvanceData(pageSize,0,startTime,festivalId, endTime, setTableAdvanceData);
                  }}>Search</IonButton>

        </div>
        <div className="container">
          <table>
            <thead >
              <tr>
                <th >Performance Id</th>
                <th >Festival Id</th>
                <th >StartTime</th>
                <th >EndTime</th>
                <th >Popularity</th>
              </tr>
            </thead>
            <tbody>
            {tableAdvanceData.map((item:any) => (
                  <tr key={item.performanceid}>
                    <td>{item.performanceid}</td>
                    <td>{item.festivalid}</td>
                    <td>{item.starttime}</td>
                    <td>{item.endtime}</td>
                    <td>{item.popularity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <div>
            <nav>
              <ul>
                <li>
                  {/* <IonButton className="IonBtn" onClick={()=>{
                     setPage(pageNum => pageNum);
                     getBasicData(pageSize,page,startTime,festivalId,setTableData);
                  }}>First</IonButton> */}
                </li>
                <li>
                  <IonButton className="IonBtn" onClick={()=>{
                     setPage(pageNum => pageNum - 1);
                     getAdvanceData(pageSize,page-1,startTime,festivalId, endTime,setTableAdvanceData);
                  }}>Previous</IonButton>
                </li>
                <li>
                  <IonButton className="IonBtn" onClick={()=>{
                    setPage(pageNum => pageNum + 1);
                    getAdvanceData(pageSize,page+1,startTime,festivalId, endTime, setTableAdvanceData);
                  }}>Next</IonButton>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>
        <div className="container">
        <IonSelect
            value={pageSize}
            className="selection"
            interface="popover"
            placeholder={(10).toString()}
            onIonChange={(e) => {
              setRows(e.detail.value);
              setPage(0);
              getAdvanceData(e.detail.value, 0,startTime,festivalId, endTime, setTableAdvanceData);
              console.log(e.detail.value)
            }}
          >
            <IonSelectOption value={5}>
              {5}
            </IonSelectOption>
            <IonSelectOption value={10}>
              {10}
            </IonSelectOption>
            <IonSelectOption value={20}>
              {20}
            </IonSelectOption>
          </IonSelect>
        </div>  
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
