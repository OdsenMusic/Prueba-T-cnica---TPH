export async function post(apiUrl, token, data) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return {
    data: responseData,
    ok: response.ok,
    status: response.status,
  };
}

export async function patch(apiUrl, token, data) {
  const response = await fetch(apiUrl, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return {
    data: responseData,
    ok: response.ok,
    status: response.status,
  };
}

export async function del(apiUrl, token) {
  const response = await fetch(apiUrl, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return {
    data,
    ok: response.ok,
    status: response.status,
  };
}
