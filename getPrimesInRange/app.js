function isPrime(n) {
    if(n<2) return false;
    for(let i = 2; i*i <= n; i++) {
        if(n%i === 0) return false;
    }

    return true;
}

function getPrimesInRange() {
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    const result2b = [];
    const result2c = [];

    const start = performance.now();
    for(let i=first; i<=second; i++) {
        const eachStartTime = performance.now();
        const primeResult = isPrime(i);
        const eachEndTime = performance.now();
        result2b.push(
            {
                Number: i, 
                Result: primeResult ? 'Prime' : 'Normal', 
                Time: eachEndTime - eachStartTime
            }
        )

        if(primeResult) result2c.push(
            {
                Number: i,
                Time: eachEndTime-eachStartTime
            }
        )
    }
    const end = performance.now();
    const totalTime = end-start;
    console.log("res2b",result2b, result2c)

    const avg2b = result2b.reduce((acc, el) => acc + el.Time, 0) / result2b.length;
    const avg2c = result2c.reduce((acc, el) => acc + el.Time, 0) / result2c.length;

    document.getElementById('result').innerHTML = 
    `<h4>Total time to run getPrimesInRange: ${totalTime.toFixed(5)} ms</h4>
    <p>Average 2.b Time: ${avg2b.toFixed(5)} ms</p>
    <p>Average 2.c Time: ${avg2c.toFixed(5)} ms</p>`;

    createTable(result2b, 'popup1', ['Number', 'Result', 'Time'])
    createTable(result2c, 'popup2', ['Number', 'Time'])
}

function createTable(data, tab, col) {
    let html = '<table><tr>' + col.map(h => `<th>${h}</th>`).join('') + '</tr>';
      data.forEach(row => {
        html += '<tr>' + col.map(h => `<td>${row[h]}</td>`).join('') + '</tr>';
      });
      html += '</table>';
      document.getElementById(tab).innerHTML = html;
}

function showDetailTab() {
    document.getElementById('popup1').classList.add('active');
    document.getElementById('popup2').classList.add('active');
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
    showDetailTab();
}