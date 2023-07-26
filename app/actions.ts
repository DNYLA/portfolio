'use server';
import { Project } from '@/lib/types';
import projects from '../projects.json';

export async function getProjects(): Promise<Project[]> {
  //Processing not really needed only a server action so in the future
  //if i decide to move all of this to a DB where i can easily upload and manage my projects i dont have to update any of the fetching

  return projects as Project[];
}

export async function getProjectNames(): Promise<string[]> {
  return projects.map((item) => item.name);
}

export async function getProjectByName(name: string): Promise<Project> {
  const project = projects.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (!project) throw new Error("Can't find project name");

  return project;
}
