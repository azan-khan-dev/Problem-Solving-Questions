function getPath(obj, path) {
  const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);
  let current = obj;
  for (const key of keys) {
    if (current == null) return undefined;
    current = current[key];
  }
  return current;
}

// getPath({user: {address: {city: "NY"}}}, "user.address.city") -> "NY"
// getPath({items: [{name: "a"}, {name: "b"}]}, "items[1].name") -> "b"