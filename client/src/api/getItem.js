export async function getItemData(setItems) {
  try {
    const response = await fetch("/api/item");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setItems(data.items);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}
