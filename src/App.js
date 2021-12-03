import './App.css';

function App() {
  const badTrack = [
    '202123/C764643',
    '202119/C762388',
    '202114/C760626',
    '202119/C762008',
    '202113/C760306',
    '202122/C763516',
    '202102/C740006',
    '202115/C760943',
    '202123/C764668',
    '202123/C764761',
    '202124/C765284',
    '202115/C760788',
    '202045/C740239',
    '202115/C760896',
    '2020 21/C740126',
    '202114/C760511',
    '202122/C763451',
    '202125/C765607',
    '202122/C763484',
    '202045/C740267',
    '202123/C764824',
    '202115/C760777',
    '202124/C765313',
    '202122/C763427',
    '202124/C765166',
    '202122/C763439',
    '202114/C760461',
    '202114/C760572',
    '202113/C760252',
    '202115/C760956',
    '202123/C764736',
    '202119/C762162',
    '202123/C764726',
    '202119/C762021',
    '202124/C765314',
    '202119/C762004',
    '202122/C763513',
    '202124/C765304',
    '202114/C760418',
    '202123/C764774',
    '202115/C760776',
    '202114/C760494',
    '202124/C765153',
    '202119/C762136',
    '202119/C762048',
    '202114/C760420',
    '202122/C763526',
    '202122/C763489',
    '202124/C765241',
    '202125/C765587',
    '202119/C762424',
    '202124/C765081',
    '202114/C760474',
    '202123/C764803',
    '202125/C765631',
    '202044/C740179',
    '202115/C760827',
    '202115/C760897',
    '202122/C763448',
    '202123/C764841',
    '202119/C762375',
    '202115/C760757',
    '202115/C760719',
    '202119/C762220',
    '202123/C764775'
  ];

  const outOfWarranty = badTrack.filter(word => word.includes('2020'))
  const inWarranty = badTrack.filter(word => word.includes('2021'))
  function printOutOfWarranty() {
      console.log('out of warranty ' + outOfWarranty.length)
  }

  function renderCount(warranty=true) {
    
      const count = document.getElementById('count');
      const length = warranty ? inWarranty.length : outOfWarranty.length;
      count.innerHTML = `<h1>${warranty ? "In Warranty" : "Out of Warranty"} Count: ${length}</h2>`
      console.log({count})
  }

  printOutOfWarranty()

  return (
    <div>
      <header className="my welcome">
          WELCOME
      </header>
      <div>
          <p>
              <strong>Here you can see what is in/out of warranty!</strong>
          </p>
      </div>
      <p>
          <a className="space button-base bg-green" href="proj2.js">proj2.js</a>
          <a className="space button-base bg-red" href="index.css">index.css</a>
      </p>
      <p id="count">Count: </p>
      <button className="button-base bg-green" onClick={() => renderCount(true)}>In warranty
      </button>
      <button className="button-base bg-red" onClick={() => renderCount(false)}>
          Out of warranty
      </button>
      <button className="button-base bg-blue" onClick={() => document.write('Total bad units: ' + badTrack.length)}>
          Total Bad Units
      </button>
    </div>
  );
}

export default App;
