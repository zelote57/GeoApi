

const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1ec8d3e68msh1461638918acc45p1078dejsnd48512937d49',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

const fetchIpInfo = ip =>{
 return  fetch (`https://ip-geo-location.p.rapidapi.com/ip/23.123.12.11?format=json/${ip}`, OPTIONS)
       .then(res => res.json())
       .catch(err => console.error(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')
$form.addEventListener('submit', async (event)=>{
event.preventDefault()
const {value} = $input
if (!value) return

$submit.setAttribute('disabled', '')
$submit.setAttribute('aria-busy', 'true')

const ipInfo = await fetchIpInfo(value)

if (ipInfo) {
  $results.innerHTML = JSON.stringify(ipInfo, null, 2)
}

$submit.removeAttribute('disabled')
$submit.removeAttribute('aria-busy')

})