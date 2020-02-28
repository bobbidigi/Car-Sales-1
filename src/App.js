import React from 'react';
import {connect} from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
// actions
import {addFeature, removeFeature} from './actions/featureActions'

const App = () => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addFeature,
  removeFeature
}
const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
