"use client"
import { FC, useState, useEffect } from "react"
import { useParams } from "next/navigation";

import Banner from "@/app/components/app/Banner";
import HomeLayout from "@/app/components/layouts/home-layout";
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
    <HomeLayout>
      <Banner bgImg={project?.img} />

      <div className='w-11/12 mx-auto md:w-9/12 mt-20 mb-40'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
          </div>
          <div>
            <p className="text-[24px] md:text-[38px] font-bold text-black font-montserrat my-2">
              { project?.title || 'Project Title' }
            </p>
            <p className="text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">
              { project?.location || 'Project Location' }
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default PortfolioProject;