import React from 'react';
import OneTehsil from './OneTehsil';
import RatnagiriTehsil from '../../Images/RatnagiriTehsil.jpg'
import RajapurTehsil from '../../Images/RajapurTehsil.jpg';
import LanjaTehsil from '../../Images/LanjaTehsil.jpg';
import SangameshwarTehsil from '../../Images/SangameshwarTehsil.jpg';
import GuhagarTehsil from '../../Images/GuhagarTehsil.jpg';
import ChiplunTehsil from '../../Images/ChiplunTehsil.jpg';
import KhedTehsil from '../../Images/KhedTehsil.jpeg';
import DapoliTehsil from '../../Images/DapoliTehsil.jpg';
import MandangadTehsil from '../../Images/MandangadTehsil.jpeg';


export default function Tehsil() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center p-7 sm:p-[50px]">
      
      <OneTehsil
        tName="Ratnagiri"
        discription="Ratnagiri is such a beautiful place to visit."
        backgroundImage={RatnagiriTehsil}
      />
      <OneTehsil
        tName="Rajapur"
        discription="Rajapur is known for its scenic beauty."
        backgroundImage={RajapurTehsil}
      />
      <OneTehsil
        tName="Lanja"
        discription="Lanja offers a peaceful retreat."
        backgroundImage={LanjaTehsil}
      />
      <OneTehsil
        tName="Sangameshwar"
        discription="Sangameshwar has a rich cultural heritage."
        backgroundImage={SangameshwarTehsil}
      />
      <OneTehsil
        tName="Chiplun"
        discription="Chiplun is a blend of natural "
        backgroundImage={ChiplunTehsil}
      />
      <OneTehsil
        tName="Guhagar"
        discription="Guhagar is famous for its beaches."
        backgroundImage={GuhagarTehsil}
      />
      <OneTehsil
        tName="Khed"
        discription="Khed is surrounded by lush greenery."
        backgroundImage={KhedTehsil}
      />
      <OneTehsil
        tName="Dapoli"
        discription="Dapoli is a popular tourist destination."
        backgroundImage={DapoliTehsil}
      />
      <OneTehsil
        tName="Mandangad"
        discription="Mandangad is known for its forts and history."
        backgroundImage={MandangadTehsil}
      />
    </div>
  );
}
