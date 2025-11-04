"use client"
import { FC, useState, useEffect } from "react"
import { useParams } from "next/navigation";

import { PortfolioProjects, IPortfolioProject } from "@/app/constant";

const PortfolioProject: FC<{ params: { project: string } }> = () => {

  const params = useParams();
  const projectName = params.project as string;
  const [project, setProject] = useState<IPortfolioProject | null>(null);

  const getProject = (slug: string): IPortfolioProject | null => {
    const project = PortfolioProjects.find((item: IPortfolioProject) => item.slug === slug);
    return project || null;
  };


  useEffect(() => {
    const project = getProject(projectName);
    setProject(project);
  }, [projectName]);


  return (
    <div 
      className="w-full h-screen relative"
      style={{
        backgroundImage: `url('${project?.img}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}
    >


      {/* Project Details Sidebar */}
      {
        project?.details && (
          <div className="absolute bottom-0 top-0 right-0 w-8/12  md:w-4/12 lg:w-3/12 px-4 py-10 h-screen bg-black/50 z-10 overflow-y-scroll">
            {
              project?.details?.map((section: any, index: number) => (
                <div key={index} className="mb-10">
                  <p className=" text-white text-sm font-montserrat mb-1">{section?.title}</p>
                  <p className=" text-gray-lightest text-xs font-montserrat mb-1">{section?.description}</p>
                </div>
              )) 
            }
          </div>
        )
      }

      {/* Project Title Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full p-4 min-h-[150px] bg-black/50">
        <p className="border-b-[1px] border-primary text-white text-lg md:text-xl font-montserrat w-max mb-1">{project?.title}</p>
        <p className=" text-white text-lg md:text-xl font-montserrat mb-1">{project?.projectStatus}</p>
        <p className=" text-white text-sm font-montserrat mb-1">{project?.location}</p>
      </div>
    </div>
  )
}

export default PortfolioProject;