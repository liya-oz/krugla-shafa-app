const BASE_URL = 'https://furniture-api.fly.dev/v1/products';

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
  return response.json();
}

export async function fetchAllProducts() {
  try {
    const response = await fetch(BASE_URL);
    return await handleResponse(response);
  } catch (err) {
    console.error('Failed to fetch products:', err);
    throw new Error(err.message || 'Error fetching products.');
  }
}

export async function fetchProductBySku(sku) {
  try {
    const response = await fetch(`${BASE_URL}/${sku}`);
    return await handleResponse(response);
  } catch (err) {
    console.error('Failed to fetch product details:', err);
    throw new Error(err.message || 'Error fetching product details.');
  }
}

export async function toggleFeaturedProduct(sku) {
  try {
    const response = await fetch(`${BASE_URL}/${sku}/featured`, {
      method: 'PATCH',
    });
    return await handleResponse(response);
  } catch (err) {
    console.error('Failed to update featured product:', err);
    throw new Error(err.message || 'Error updating featured product.');
  }
}

export async function applyDiscountToProduct(
  sku,
  discountPercentage = null,
  discountPrice = null,
) {
  try {
    if (!discountPercentage && !discountPrice) {
      throw new Error('Provide either discountPercentage or discountPrice.');
    }

    const url = new URL(`${BASE_URL}/${sku}/discount`);
    if (discountPercentage) {
      url.searchParams.append('discountPercentage', discountPercentage);
    }
    if (discountPrice) {
      url.searchParams.append('discountPrice', discountPrice);
    }

    const response = await fetch(url, { method: 'PATCH' });
    return await handleResponse(response);
  } catch (err) {
    console.error('Failed to apply discount:', err);
    throw new Error(err.message || 'Error applying discount.');
  }
}
