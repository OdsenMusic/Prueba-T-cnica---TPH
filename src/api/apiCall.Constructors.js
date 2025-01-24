const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function post(apiUrl, token, data) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${apiBaseUrl}${apiUrl}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    return {
      data: responseData,
      ok: response.ok,
      status: response.status,
    };
  } catch (error) {
    console.error("Error during API call:", error);
    return {
      data: null,
      ok: false,
      status: 500,
    };
  }
}

export async function patch(apiUrl, token, data) {
  const response = await fetch(`${apiBaseUrl + apiUrl}`, {
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
  const response = await fetch(`${apiBaseUrl + apiUrl}`, {
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
