export function setStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getStorageItem(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function removeStorageItem(key) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}
