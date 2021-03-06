import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Axios from "axios";
import { Col } from "reactstrap";

class EthereumChart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         bitcoinTrading: []
      };
   }
   componentDidMount() {
      Axios.get("/getTokenInfo/0xe94327d07fc17907b4db788e5adf2ed424addff6?apiKey=freekey")
      .then(res => {
         this.setState({
            bitcoinTrading: res.data.price.rate
         });
      });
   }
   render() {
      const random = Math.floor(Math.random() * 10);
      const theArrayDollar = [];
      const datasDollars = Object.values(this.state.bitcoinTrading).map(data => {
         return theArrayDollar.push(data);
      });
      const theArrayDate = [];
      const datasDates = Object.keys(this.state.bitcoinTrading).map(date => {
         return theArrayDate.push(date);
      });

      console.log(theArrayDate);

      const options = {
         chart: {
            type: "line",
            backgroundColor: "#343a40",
            zoomType: "x"
         },
         title: {
            text: "",
            style: {
               color: "#FFF",
               font: '16px "Trebuchet MS", Verdana, sans-serif'
            }
         },
         xAxis: {
            categories: theArrayDate,

            labels: {
               style: {
                  color: "#FFF",
                  font: "11px Trebuchet MS, Verdana, sans-serif"
               }
            }
         },
         yAxis: {
            categories: [],
            label: {
               style: {
                  color: "#FFF",
                  font: "11px Trebucher MS, Verdana, sans-serif"
               }
            }
         },
         series: [
            {
               name: "Dollar value",
               type: "area",
               colorIndex: random,
               data: theArrayDollar,
               threshold: 0,
               turboThresold: 0
            }
         ]
      };

      return (
         <Col lg={{ size: 10, offset: 1 }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
         </Col>
      );
   }
}

export default EthereumChart;
