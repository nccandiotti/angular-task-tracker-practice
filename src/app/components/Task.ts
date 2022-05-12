export interface Task {
  // optional because task will not initially have an id until it's saved to the JSON server
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
