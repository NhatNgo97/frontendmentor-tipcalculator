function calculate(){
    const bill = document.getElementById('bill-input');
    const people = document.getElementById('people-input');
    const percent = document.getElementsByClassName('tip');
    const custompercent = document.getElementById('custom-percent');
    const tipresult = document.getElementById('tip_result');
    const totalresult = document.getElementById('total_result');
    //const error = document.getElementById("error");
    const reset = document.getElementById("reset");
    let tippercent = 0;
    
    const inputhandler = (e) =>{
        console.log(tippercent);
        if (e.target.id == 'custom-percent'){
            tippercent = custompercent.value;
        }

        if (Number(people.value) <= 0 ||Number(people.value) > 999){
            console.log(" 'Must be less than 999 or more than 0';");
        }

        tipresult.innerHTML = '$' + Math.round(((Number(bill.value) / 100 * tippercent) / people.value) * 100) / 100;
        totalresult.innerHTML = '$' + Math.round((Number(bill.value) / Number(people.value) + (Number(bill.value) / 100 * tippercent) / people.value) * 100) / 100;
        console.log(tippercent);
    }

    const clickhandler = (e) =>{
        if (e.target == custompercent){
            if(e.target.value != undefined){
                tippercent = Number(e.target.innerHTML);
            }
        }
        else{
            tippercent = Number(e.target.innerHTML);
        }
        if (tippercent != undefined &&
            tippercent != 0 &&
            bill.value != 0 &&
            people.value != 0) {

                tipresult.innerHTML = '$' + Math.round(((Number(bill.value) / 100 * tippercent) / people.value) * 100) / 100;
                totalresult.innerHTML = '$' + Math.round((Number(bill.value) / Number(people.value) + (Number(bill.value) / 100 * tippercent) / people.value) * 100) / 100;
        }

    }

    const resetInput = () =>{
        bill.value = '';
        people.value = '';
        tippercent = 0;
        custompercent.value = '';
        tipresult.innerHTML = '$0.00';
        totalresult.innerHTML = '$0.00';
        location.hash = '';
    }

    bill.addEventListener('input', inputhandler);
    people.addEventListener('input', inputhandler);
    custompercent.addEventListener('input', inputhandler);
    customPercent.addEventListener('click', clickhandler);
    reset.addEventListener('click', resetInput);

    Array.prototype.forEach.call(percent, element =>{
        element.addEventListener('click', clickhandler);
    })
}
