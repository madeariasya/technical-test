import city from "./city.js";
import province from "./province.js";

export function getCityByProvinceId(provinceId) {
  return city.filter((el) => el.provinsi_id === provinceId);
}

export function getProvinceNameByCityId(cityId) {
  const findCity = city.find((el) => el.id === cityId);
  if (findCity) {
    const findProvince = province.find((el) => el.id === findCity.provinsi_id);
    return findProvince ? findProvince.name : "Provinsi tidak ditemukan";
  }
  return "Kota tidak ditemukan";
}

export function sortProvincesByIdAndName(ascending = true) {
  return province.slice().sort((a, b) => {
    if (a.id === b.id) {
      return a.name.localeCompare(b.name);
    }
    return ascending ? a.id - b.id : b.id - a.id;
  });
}

