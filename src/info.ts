// A place for all personal settings
export const SOCIAL_LINKS = {
	EMAIL: 'mailto:ethanzhao1981@gmail.com',
	PHONE: 'tel:6475224188',
	GITHUB: 'https://github.com/redmac135',
	LINKEDIN: 'https://www.linkedin.com/in/ethan-zhao-731a821b7/'
};

export const RESUME_LINK = '/zhao_ethan_resume.pdf';

export const ARIA_LABELS = {
	EMAIL: 'Email Ethan Zhao',
	PHONE: 'Call Ethan Zhao',
	GITHUB: "Visit Ethan Zhao's GitHub profile",
	LINKEDIN: "Visit Ethan Zhao's LinkedIn profile",
	RESUME: "Download Ethan Zhao's resume"
};

import personalWebsiteImg from '$lib/assets/projects/personal-website/thumbnail.webp';
import apreptutorsImg from '$lib/assets/projects/apreptutors/thumbnail.webp';
import foursightImg from '$lib/assets/projects/foursight/thumbnail.webp';
import javaparticlesImg from '$lib/assets/projects/java-particle-fields/thumbnail.webp';
import mindfulReflectionsImg from '$lib/assets/projects/mindful-reflections/thumbnail.webp';
import bansheeTrainingImg from '$lib/assets/projects/banshee-training/thumbnail.webp';
import rrhImg from '$lib/assets/projects/roberts-rules-helper/thumbnail.webp';
import memoryEchoImg from '$lib/assets/projects/memory-echo/thumbnail.webp';
import quantumPortfolioOptimizationImg from '$lib/assets/projects/portfolio-optimization/thumbnail.png';
import cHuffmanEncoderImg from '$lib/assets/projects/c-huffman-encoder/thumbnail.png';

export const PROJECTS_LIST = [
	{
		imagesrc: cHuffmanEncoderImg,
		imagealt: 'Screenshot of Huffman Encoder encoder.c file',
		title: 'Huffman Encoder in C',
		url: 'c-huffman-encoder'
	},
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
		imagesrc: quantumPortfolioOptimizationImg,
		imagealt: "Screenshot of D-Wave's Inspector",
		title: 'Quantum Portfolio Optimization',
		url: 'portfolio-optimization'
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

export const WORKSHOP_LIST = [
	{
		title: 'Introduction to Web Development',
		url: 'intro-webdev'
	},
	{
		title: 'Introduction to Quantum Computing',
		url: 'intro-quantum-computing'
	}
];
