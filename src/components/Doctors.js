import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/doctors.css'

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Виктор',
      specialty: 'Рипер',
      image: '/assets/img/doctors/Viktor-Vektor-Cyberpunk-2077.jpg',
      description: ' Рипер, к которому идут за хорошим хромом. Забудьте о клиниках, в которых повсюду сверкают логотипы корпораций, а приёмная напоминает гибрид комнаты отдыха и космического корабля. У Виктора всё просто, зато тем, кто прилично себя ведёт, порой предлагают пива вместе с обезболивающим.'
    },
    {
      id: 2,
      name: 'Алиса',
      specialty: 'Рипер',
      image: '/assets/img/doctors/95020-artist-artwork-cyberpunk-hd-4k-artstation.jpg',
      description: 'Алиса – выдающийся специалист в области киберимплантов и биоинженерии. Обладая глубокими знаниями в области биомедицинской инженерии и информационных технологий, она посвятила свою карьеру разработке и внедрению передовых технологий в сфере киберимплантации.'
    },
    {
      id: 3,
      name: 'Милт Науман',
      specialty: 'Рипер',
      image: '/assets/img/doctors/3F3F_3F3F3F_3F3F3F3F29.jpg',
      description: ' Милт Науман регулярно проводил осмотры Легенды Джонни Сильверхенда.'
    },
    {
      id: 4,
      name: 'Рафаэль Перес',
      specialty: 'Рипер',
      image: '/assets/img/doctors/3F3F283F3F3F29.jpg',
      description: 'Рафаэль Перес работал в лаборатории корпорации «Мур технолоджис» на протяжении десяти лет.'
    },
  ];

  return (
    <div className='backgr'>
      <Header />
      <div className="doctors-container">
        <h2>Наши риперы</h2>
        <div className="doctors-grid">
          {doctors.map(doctor => (
            <div key={doctor.id} className="doctor">
              <img src={doctor.image} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <p>{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Doctors;