/* eslint-disable class-methods-use-this */
const { collection, addDoc, getDocs } = require('firebase/firestore');
const BaseController = require('./baseCtrl.js');
const db = require('../config/firestore_initialize.js');

class PredictionController extends BaseController {
  async addPredictionData(req, res) {
    // const {} = req.body;
    // add data to predictionData collection
    try {
      // import { doc, setDoc } from "firebase/firestore";
      // await setDoc(doc(db, "cities", "new-city-id"), data);

      // receive uploaded image
      // load image into TF model
      // receive result
      // parse result to get predictionData

      const jsonData = '{"predictionData": [{"boundingBoxData": [0.7067434787750244, 0.6559624671936035, 0.869033932685852, 0.8926178216934204], "classType": 2, "scores": 0.9999217, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.7632913589477539, 0.28311342000961304, 0.8127776384353638, 0.4888693690299988], "classType": 1, "scores": 0.99991417, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.4771929681301117, 0.15043918788433075, 0.5267134308815002, 0.22164927423000336], "classType": 2, "scores": 0.99986744, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.4865937829017639, 0.820902407169342, 0.5400575995445251, 0.9007806181907654], "classType": 2, "scores": 0.9997601, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.484879732131958, 0.48573988676071167, 0.5317273139953613, 0.5640386939048767], "classType": 2, "scores": 0.9996877, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.3084951937198639, 0.7663528323173523, 0.35670891404151917, 0.8581427931785583], "classType": 2, "scores": 0.99893564, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.8657294511795044, 0.38320454955101013, 0.934190034866333, 0.6049150824546814], "classType": 6, "scores": 0.9972888, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.25219202041625977, 0.044211871922016144, 0.2963950037956238, 0.1949126422405243], "classType": 2, "scores": 0.9964318, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.8595221042633057, 0.11937020719051361, 0.9229217767715454, 0.31607478857040405], "classType": 6, "scores": 0.99627423, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.6505113840103149, 0.2194531410932541, 0.7269703149795532, 0.49580150842666626], "classType": 6, "scores": 0.99478036, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.17090851068496704, 0.2968878746032715, 0.20117449760437012, 0.7219789028167725], "classType": 5, "scores": 0.99439937, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.5473545789718628, 0.4762038290500641, 0.5640870332717896, 0.6128796339035034], "classType": 4, "scores": 0.99276614, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.5470673441886902, 0.11497187614440918, 0.5644646286964417, 0.26985040307044983], "classType": 4, "scores": 0.94669944, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.4419383108615875, 0.051946043968200684, 0.47512200474739075, 0.9445318579673767], "classType": 10, "scores": 0.94261605, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.3437075614929199, 0.05813572555780411, 0.41223055124282837, 0.2954653799533844], "classType": 6, "scores": 0.872517, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.5492396354675293, 0.8124357461929321, 0.5623327493667603, 0.9737503528594971], "classType": 4, "scores": 0.86585325, "originalImageSize": [1188, 864]}]}';

      const predictionData = JSON.parse(jsonData);

      const docRef = await addDoc(collection(db, 'predictionData'), predictionData);
      console.log('Document written with ID: ', docRef, docRef.id);
      res.send(`Firestore updated: ${docRef}`);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async getPredictionData(req, res) {
    const querySnapshot = await getDocs(collection(db, 'predictionData'));
    const result = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      result.push(doc.data());
    });
    res.send(`All prediction data: ${result}`);
  }

  //   async uploadImage(req, res) {

  //   }

  //   async deleteImage(req, res) {

//   }
}

module.exports = PredictionController;
