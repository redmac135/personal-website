// A place for all personal settings
export const SOCIAL_LINKS = {
	EMAIL: 'mailto:ethanzhao1981@gmail.com',
	PHONE: 'tel:6475224188',
	GITHUB: 'https://github.com/redmac135',
	LINKEDIN: 'https://www.linkedin.com/in/ethan-zhao-731a821b7/'
};

export const RESUME_LINK = '/ethan_zhao_2023.pdf';

import personalWebsiteImg from '$lib/assets/projects/personal-website/thumbnail.webp';
import apreptutorsImg from '$lib/assets/projects/apreptutors/thumbnail.webp';
import foursightImg from '$lib/assets/projects/foursight/thumbnail.webp';
import javaparticlesImg from '$lib/assets/projects/java-particle-fields/thumbnail.webp';
import mindfulReflectionsImg from '$lib/assets/projects/mindful-reflections/thumbnail.webp';
import bansheeTrainingImg from '$lib/assets/projects/banshee-training/thumbnail.webp';
import rrhImg from '$lib/assets/projects/roberts-rules-helper/thumbnail.webp';
import memoryEchoImg from '$lib/assets/projects/memory-echo/thumbnail.webp';

export const PROJECTS_LIST = [
	{
		imagesrc: rrhImg,
		imagealt: 'Screenshot of Roberts Rules Helper Website',
		title: 'Roberts Rules Helper',
		url: 'roberts-rules-helper'
	},
	{
		imagesrc: memoryEchoImg,
		imagealt: 'Screenshot of Memory Echo Website',
		title: 'Memory Echo',
		url: 'memory-echo'
	},
	{
		imagesrc: apreptutorsImg,
		imagealt: '"Screenshot of aPrepTutors landing page',
		title: 'aPrep Tutors',
		url: 'apreptutors'
	},
	{
		imagesrc: bansheeTrainingImg,
		imagealt: 'Screenshot of Training App Website',
		title: 'Cadet Training App',
		url: 'banshee-training'
	},
	{
		imagesrc: personalWebsiteImg,
		imagealt: 'Screenshot of Personal Website Homepage',
		title: 'Personal Website',
		url: 'personal-website'
	},
	{
		imagesrc: foursightImg,
		imagealt: 'Screenshot of AI cancer detection diagnosis from Foursight website',
		title: 'AI Gene based Cancer Detection',
		url: 'foursight'
	},
	{
		imagesrc: mindfulReflectionsImg,
		imagealt: 'Screenshot of Mindful Reflections Website',
		title: 'Mindful Reflection Journal',
		url: 'mindful-reflections'
	},
	{
		imagesrc: javaparticlesImg,
		imagealt: 'Screenshot of Java Particle Image Animation',
		title: 'Java Particle Simulation',
		url: 'java-particle-fields'
	}
];
