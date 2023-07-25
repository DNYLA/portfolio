'use server';
import projects from '../projects.json';

export async function getProjects() {
  //Processing not really needed only a server action so in the future
  //if i decide to move all of this to a DB where i can easily upload and manage my projects i dont have to update any of the fetching

  return projects;
}
