
import React from 'react'
import Appbar from './components/appbar';
import Foodcontent from './components/food-content';
import Styles from '../styles/Home.module.css'
import Drinkcontent from './components/drink-content';
import Foodmenu from './components/food-Menu';
import Drinkmenu from './components/drink-Menu';
import Chef_one from './components/chef_one';
import Chef_two from './components/chef_two';
import Laurels from './components/laurels';

function homepage() {
  return (
    <div className={Styles.background}>
      <div className={Styles.data_text}>
        <div className="fixed w-full">
          <Appbar />
        </div>
            <div className=" h-16"/>
        <Foodcontent />
        <Drinkcontent />
        <Foodmenu />
        <Drinkmenu />
        <Chef_one />
        <Chef_two />
        <Laurels />
      </div>
    </div>
  );
}

export default homepage;

