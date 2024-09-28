// function hello(){
//     return []
// }
import {useEffect,useState} from 'react'

function useCurrencyInfo(){
	const [currencyInfo,setCurrencyInfo] = useState([])
	useEffect(()=>{
		fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=6d7ff239e40e4df8814bbc38d43a0c25/latest')
		.then(response => response.json())
		.then(data => setCurrencyInfo(data))
	},[])
	return currencyInfo
}

export default useCurrencyInfo