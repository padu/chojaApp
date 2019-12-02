const appDomain = 'http://webapi.choja.in';

const adTypes = document.querySelector('#adType');
const adCategories = document.querySelector('#adCategories');
const adSubCategories = document.querySelector('#adSubCategories');
const adsLoc = document.querySelector('#adLocations');

window.addEventListener('load', e => {
    updateAdTypes();
    updateCategories();
    updateLocations();

    adCategories.addEventListener('change', e => {
        updateAdSubCategories(e.target.value);
    })
});

async function updateAdTypes() {
    const res = await fetch(`${appDomain}/Api/Choja/GetAdvertisementTypes`);
    const data = await res.json();

    adTypes.innerHTML = data.Results.$values.map(adType => `<option value="${adType.Id}">${adType.Name}</option>`).join('\n');
}

async function updateCategories() {
    const res = await fetch(`${appDomain}/Api/Choja/GetCategories`);
    const data = await res.json();

    adCategories.innerHTML = data.Results.$values.map(adCategory => `<option value="${adCategory.Id}">${adCategory.Name}</option>`).join('\n');
    updateAdSubCategories(data.Results.$values[0].Id);
}

async function updateAdSubCategories(categoryID) {
    const res = await fetch(`${appDomain}/Api/Choja/GetSubCategories?categoryId=${categoryID}`);
    const data = await res.json();

    adSubCategories.innerHTML = data.Results.$values.map(adSubCategory => `<option value="${adSubCategory.Id}">${adSubCategory.Name}</option>`).join('\n');
}

async function updateLocations() {
    const res = await fetch(`${appDomain}/Api/Choja/GetLocations`);
    const data = await res.json();

    adsLoc.innerHTML = data.Results.$values.map(loc => `<option value="${loc.Id}">${loc.Name}</option>`).join('\n');
}

async function postAdvertisement() {
    
}

function clearForm() {
    
}