import { submitFormData } from '../state/mockBackend';
import { getSubmittedData, deleteData, updateData } from '../state/mockBackend';

test("CRUD Test test", async () => {
  // Test creating new data via submit
  const formData = { name: "New User", email: "newinfo@email.com" };
  let createResponse = await submitFormData(formData);
  expect(createResponse.status).toBe ("success");
  // Test retrieving the data
  let retrievedData = await getSubmittedData();
  expect(retrievedData.length).toBe(greater than 0); // Should return more than 0 items
  // Test updating the data
  let updateResponse = await updateData("New User", { name: "Updated User" });
  expect(updateResponse.status).toBe ("success"); // Should updated status work fine
  // Test deleting the data
  let deleteTestResponse = await deleteData("Updated User");
  expect(deleteTestResponse.status).toBe ("success");
});
