/**
 * The logic parts of these functions are horrible
 * Search online for proper ways to handle
 * loading and storing information to local storage
 */

export function saveToLocalStorage(string) {
  // Her we will put all the logic for storing in local storage here
  const oldMessages = loadFromLocalStorage()

  const allMessages = [...oldMessages, string]

  localStorage.setItem('messages', allMessages);
}

export function loadFromLocalStorage() {
  // Here we will put all the logic for loading from local storage here
  const messages = []

  messages.push(localStorage.getItem('messages'));

  // Some logic for checking if the value actually exists

  // Return what you got from local storage or if it where empty
  return messages
}