let $ = document.querySelector.bind(document);
let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;
let avg1 = 0;
let avg2 = 0;
let avg3 = 0;
let avg4 = 0;
let avg5 = 0;
let avg6 = 0;
let result = 0;

let getval1 = () => {
    try {
        let tempval = parseInt($('.val1').dataset.value);
        value1 = value1 + tempval;
        avg1++
        let getone = $('.one');
        getone.placeholder = `${value1} = ${avg1}`


    } catch (error) {
        console.log(error);
    }
}
let getval2 = () => {
    try {
        let tempval = parseInt($('.val2').dataset.value);
        value2 = value2 + tempval;
        avg2++
        let getone = $('.two');
        getone.placeholder = `${value2} = ${avg2}`


    } catch (error) {
        console.log(error);
    }
}
let getval3 = () => {
    try {
        let tempval = parseInt($('.val3').dataset.value);
        value3 = value3 + tempval;
        avg3++
        let getone = $('.three');
        getone.placeholder = `${value3} = ${avg3}`


    } catch (error) {
        console.log(error);
    }
}
let getval4 = () => {
    try {
        let tempval = parseInt($('.val4').dataset.value);
        value4 = value4 + tempval;
        avg4++
        let getone = $('.four');
        getone.placeholder = `${value4} = ${avg4}`


    } catch (error) {
        console.log(error);
    }
}
let getval5 = () => {
    try {
        let tempval = parseInt($('.val5').dataset.value);
        value5 = value5 + tempval;
        avg5++
        let getone = $('.five');
        getone.placeholder = `${value5} = ${avg5}`


    } catch (error) {
        console.log(error);
    }
}
let getval6 = () => {
    try {
        let tempval = parseInt($('.val6').dataset.value);
        value6 = value6 + tempval;
        avg6++
        let getone = $('.six');
        getone.placeholder = `${value6} = ${avg6}`


    } catch (error) {
        console.log(error);
    }
}
let calculateValue = () => {
    try {
        if (value1 !== 0) {
            result = result + value1
        }
        if (value2 !== 0) {
            result = result + value2
        }
        if (value3 !== 0) {
            result = result + value3
        }
        if (value4 !== 0) {
            result = result + value4
        }
        if (value5 !== 0) {
            result = result + value5
        }
        if (value6 !== 0) {
            result = result + value6
        }
        let invoice = $(".Result");
        invoice.innerHTML = `
        <style>
        body{
            
            margin-top:10px;
            }
            .text-danger strong {
                        color: #9f181c;
                    }
                    .receipt-main {
                        background: #ffffff none repeat scroll 0 0;
                        border-bottom: 12px solid #333333;
                        border-top: 12px solid #9f181c;
                        margin-top: 10px;
                        margin-bottom: 50px;
                        padding: 40px 30px !important;
                        position: relative;
                        box-shadow: 0 1px 21px #acacac;
                        color: #333333;
                        font-family: open sans;
                        max-width: 60%;
                        margin: auto;
                    }
                    .receipt-main p {
                        color: #333333;
                        font-family: open sans;
                        line-height: 1.42857;
                    }
                    .receipt-footer h1 {
                        font-size: 15px;
                        font-weight: 400 !important;
                        margin: 0 !important;
                    }
                    .receipt-main::after {
                        background: #414143 none repeat scroll 0 0;
                        content: "";
                        height: 5px;
                        left: 0;
                        position: absolute;
                        right: 0;
                        top: -13px;
                    }
                    .receipt-main thead {
                        background: #414143 none repeat scroll 0 0;
                    }
                    .receipt-main thead th {
                        color:#fff;
                    }
                    .receipt-right h5 {
                        font-size: 16px;
                        font-weight: bold;
                        margin: 0 0 7px 0;
                    }
                    .receipt-right p {
                        font-size: 12px;
                        margin: 0px;
                    }
                    .receipt-right p i {
                        text-align: center;
                        width: 18px;
                    }
                    .receipt-main td {
                        padding: 9px 20px !important;
                    }
                    .receipt-main th {
                        padding: 13px 20px !important;
                    }
                    .receipt-main td {
                        font-size: 13px;
                        font-weight: initial !important;
                    }
                    .receipt-main td p:last-child {
                        margin: 0;
                        padding: 0;
                    }	
                    .receipt-main td h2 {
                        font-size: 20px;
                        font-weight: 900;
                        margin: 0;
                        text-transform: uppercase;
                    }
                    .receipt-header-mid .receipt-left h1 {
                        font-weight: 100;
                        margin: 34px 0 0;
                        text-align: right;
                        text-transform: uppercase;
                    }
                    .receipt-header-mid {
                        margin: 24px 0;
                        overflow: hidden;
                    }
                    
                    #container {
                        background-color: #dcdcdc;
                    }
        
        </style>

        <div class="col-md-12">   
 <div class="row">
		
        <div class="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
            <div class="row">
    			<div class="receipt-header">
					<div class="col-xs-6 col-sm-6 col-md-6">
						<div class="receipt-left">
							<img class="img-responsive" alt="iamgurdeeposahan" src="https://bootdey.com/img/Content/avatar/avatar6.png" style="width: 71px; border-radius: 43px;">
						</div>
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6 text-right">
						<div class="receipt-right">
							<h5>Company Name.</h5>
							<p>+1 3649-6589 <i class="fa fa-phone"></i></p>
							<p>company@gmail.com <i class="fa fa-envelope-o"></i></p>
							<p>USA <i class="fa fa-location-arrow"></i></p>
						</div>
					</div>
				</div>
            </div>
			
			<div class="row">
				<div class="receipt-header receipt-header-mid">
					<div class="col-xs-8 col-sm-8 col-md-8 text-left">
						<div class="receipt-right">
							<h5>Salman Baloch</h5>
							<p><b>Mobile :</b> 0308-2137842</p>
							<p><b>Email :</b> Salman@gmail.com</p>
							<p><b>Address :</b> Pakistan, Maya Nagri</p>
						</div>
					</div>
					<div class="col-xs-4 col-sm-4 col-md-4">
						<div class="receipt-left">
							<h3>INVOICE # 102</h3>
						</div>
					</div>
				</div>
            </div>
			
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col-md-9">Payment for August 2016</td>
                            <td class="col-md-3"><i class="fa fa-inr"></i> 15,000/-</td>
                        </tr>
                        <tr>
                            <td class="col-md-9">Payment for June 2016</td>
                            <td class="col-md-3"><i class="fa fa-inr"></i> 6,00/-</td>
                        </tr>
                        <tr>
                            <td class="col-md-9">Payment for May 2016</td>
                            <td class="col-md-3"><i class="fa fa-inr"></i> 35,00/-</td>
                        </tr>
                        <tr>
                            <td class="text-right">
                            <p>
                                <strong>Total Amount: </strong>
                            </p>
                            <p>
                                <strong>Late Fees: </strong>
                            </p>
							<p>
                                <strong>Payable Amount: </strong>
                            </p>
							<p>
                                <strong>Balance Due: </strong>
                            </p>
							</td>
                            <td>
                            <p>
                                <strong><i class="fa fa-inr"></i> 65,500/-</strong>
                            </p>
                            <p>
                                <strong><i class="fa fa-inr"></i> 500/-</strong>
                            </p>
							<p>
                                <strong><i class="fa fa-inr"></i> 1300/-</strong>
                            </p>
							<p>
                                <strong><i class="fa fa-inr"></i> 9500/-</strong>
                            </p>
							</td>
                        </tr>
                        <tr>
                           
                            <td class="text-right"><h2><strong>Total: </strong></h2></td>
                            <td class="text-left text-danger"><h2><strong><i class="fa fa-inr"></i>${result}</strong></h2></td>
                        </tr>
                    </tbody>
                </table>
            </div>
			
			<div class="row">
				<div class="receipt-header receipt-header-mid receipt-footer">
					<div class="col-xs-8 col-sm-8 col-md-8 text-left">
						<div class="receipt-right">
							<p><b>Date :</b> 15 Aug 2016</p>
							<h5 style="color: rgb(140, 140, 140);">Thanks for shopping.!</h5>
						</div>
					</div>
					<div class="col-xs-4 col-sm-4 col-md-4">
						<div class="receipt-left">
							<h1>Stamp</h1>
						</div>
					</div>
				</div>
            </div>
			
        </div>    
	</div>
</div>
        `
        let saveData = localStorage.setItem("Medicine-Bill", JSON.stringify(result));


    } catch (error) {
        console.log(error);
    }
}