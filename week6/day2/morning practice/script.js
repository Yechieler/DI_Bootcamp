const access_key = `075d15d60a....`;
const list_url = `http:....`;
const rate_url = `http:....`;
const root = document.getElementById('root');

const getList = async () => {
    try{
        const response = await fetch(list_url);         /*response can be ziv*/
        const data = await response.json();
        return data.currencies;
    }
    catch(e){
        throw new Erro('Unable to get data getList')
    }
}

const createList = async() => {
    // const list = await getList(); dont need this becus its in the ui function 
    // const arr = Object.entries(list);  // .key gets you the key .values get you the values . entries get both
    // console.log(arr);

    const sel = document.createElement('SELECT')
    sel.setAttribute('id',elm);
    sel.setAttribute('name',elm);
    root.appendChild(sel);

    let opt = document.createElement('OPTION')
    Option.setAttribute('value','');
    opt.innerText = 'Please Select Currency'
    sel.appendChild(opt);

    arr.forEach(([key,value])=> {
        let opt = new Option(value,key);
        sel.appendChild(opt);
    })
}

const getExchangeRate = async(fromCurrency,toCurrency)=> {
    try {
        const response = await fetch(rate_url);
        const rates = await response.json();
        const rate = rates.quotes;

        const exchangeRate = rate['USD'+toCurrency]/ rate['USD'+fromCurrency];

        return exchangeRate;
    } catch (e) {
        throw new Error('Unable to get data from getExchangeRate')
    }
}

const createUI = async () => {
    const list = await getList();
    const arr = Object.entries(list);
    createList(arr,'from');
    createList(arr,'to');

    let amt = document.createElement('INPUT');
    amt.setAttribute('id', 'amount');
    amt.setAttribute('placeholder','Amount');
    root.appendChild(amt);

    let btn = document.createElement('BUTTON');
    btn.setAttribute('id','btn');
    btn.innerText = 'Calculate';
    root.appendChild(btn);

    let messageDiv = document.createElement('DIV');
    root.appendChild(messageDiv);

    btn.addEventListener('click', async function(){
        let fromCurrency = document.querySelector('#from').value;
        let toCurrency = document.querySelector('#to').value;
        console.log(fromCurrency,toCurrency,amount);
        let rate = await getExchangeRate(fromCurrency,toCurrency)
        const c_amount = (amount * rate).toFixed(2);
        messageDiv.innerText = `From ${fromCurrency} to ${toCurrency} = ${c_amount}`
    })
}
createUI();

