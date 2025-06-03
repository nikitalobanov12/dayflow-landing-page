import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Download, Github, Users, Shield, Timer, ArrowRight, Star, Check, Monitor, Trello } from 'lucide-react';
import { motion } from 'motion/react';
import './App.css';

// Define platform types for downloads
type Platform = 'windows' | 'macos' | 'linux';

interface DownloadOption {
	platform: Platform;
	name: string;
	icon: React.ReactElement;
	filename: string;
	size: string;
	description: string;
}

// Platform-specific icons
const WindowsIcon = ({ className }: { className?: string }) => (
	<svg
		className={className}
		viewBox='0 0 24 24'
		fill='currentColor'
	>
		<path d='M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851' />
	</svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
	<svg
		className={className}
		viewBox='0 0 24 24'
		fill='currentColor'
	>
		<path d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701' />
	</svg>
);

function App() {
	const [detectedPlatform, setDetectedPlatform] = useState<Platform>('windows');

	// Auto-detect user's operating system
	useEffect(() => {
		const userAgent = navigator.userAgent.toLowerCase();
		if (userAgent.includes('mac')) {
			setDetectedPlatform('macos');
		} else if (userAgent.includes('linux')) {
			setDetectedPlatform('linux');
		} else {
			setDetectedPlatform('windows');
		}
	}, []);

	const downloadOptions: DownloadOption[] = [
		{
			platform: 'windows',
			name: 'Windows',
			icon: <WindowsIcon className='w-8 h-8' />,
			filename: 'dayflow_0.1.0_x64-setup.exe',
			size: '3 MB',
			description: 'Windows 10/11 installer',
		},
		{
			platform: 'macos',
			name: 'macOS',
			icon: <AppleIcon className='w-10 h-10' />,
			filename: 'dayflow_0.1.0_universal.dmg',
			size: '9.04 MB',
			description: 'Universal binary for Intel & Apple Silicon',
		},
		{
			platform: 'linux',
			name: 'Linux',
			icon: (
				<img
					src='/linux.svg'
					alt='Linux'
					className='h-12 w-12'
				/>
			),
			filename: 'dayflow_0.1.0_amd64.AppImage',
			size: '86.2 MB',
			description: 'AppImage for all distributions',
		},
	];

	const getDownloadUrl = (filename: string) => `https://github.com/nikitalobanov12/dayflow/releases/latest/download/${filename}`;

	const primaryDownload = downloadOptions.find(option => option.platform === detectedPlatform);

	const features = [
		{
			icon: <Timer className='h-6 w-6' />,
			title: 'Smart Sprint Mode',
			description: 'Deep focus sessions with built-in breaks. Work in timed bursts to stay sharp and avoid burnout',
		},
		{
			icon: <Trello className='h-6 w-6' />,
			title: 'Visual Task Boards',
			description: 'See all your tasks at a glance. Move them from "To Do" to "Done" with simple drag and drop',
		},
		{
			icon: <Shield className='h-6 w-6' />,
			title: 'Your Data Stays Private',
			description: 'Everything stays on your computer. No accounts, no cloud storage, no one watching what you do',
		},
		{
			icon: <Users className='h-6 w-6' />,
			title: 'Works Everywhere',
			description: 'One app that works the same on Windows, Mac, and Linux. Install once, use anywhere',
		},
	];

	return (
		<div className='min-h-screen bg-background'>
			{/* Header */}
			<motion.header
				className='border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				<div className='container mx-auto px-4 h-16 flex items-center justify-between'>
					<motion.div
						className='flex items-center gap-3'
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
					>
						<img
							src='/logo.svg'
							alt='DayFlow'
							className='h-8 w-8'
						/>
						<span className='text-xl font-bold'>DayFlow</span>
					</motion.div>
					<motion.nav
						className='hidden md:flex items-center gap-8'
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
					>
						<a
							href='#features'
							className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
						>
							Features
						</a>
						<a
							href='#download'
							className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
						>
							Download
						</a>
						<a
							href='https://github.com/nikitalobanov12/dayflow'
							target='_blank'
							rel='noopener noreferrer'
							className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
						>
							GitHub
						</a>
					</motion.nav>
					<motion.div
						className='flex items-center gap-3'
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
					>
						<ThemeToggle />
						<Button
							asChild
							className='hidden sm:inline-flex'
						>
							<a href={getDownloadUrl(primaryDownload?.filename || downloadOptions[0].filename)}>
								<Download className='h-4 w-4 mr-2' />
								Download
							</a>
						</Button>
					</motion.div>
				</div>
			</motion.header>

			{/* Hero Section */}
			<section className='py-24 bg-gradient-to-b from-background to-muted/20'>
				<div className='container mx-auto px-4 text-center'>
					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
					>
						<Badge
							variant='outline'
							className='mb-6'
						>
							<Star className='h-3 w-3 mr-1' />
							Version 0.1.0 Available
						</Badge>
					</motion.div>

					<motion.h1
						className='text-4xl md:text-6xl font-bold tracking-tight mb-6'
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
					>
						Take Control Of Your Schedule
					</motion.h1>

					<motion.p
						className='text-xl text-muted-foreground max-w-3xl mx-auto mb-8'
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
					>
						Transform chaos into clarity. DayFlow helps you break through the mental fog of endless tasks and deadlines, so you can focus on what truly matters and actually finish what you start.
					</motion.p>

					<motion.div
						className='flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto'
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
					>
						{[
							{ icon: <Check className='h-3 w-3 mr-1.5' />, text: 'Finish More Projects' },
							{ icon: <Timer className='h-3 w-3 mr-1.5' />, text: 'Reduce Stress' },
							{ icon: <Monitor className='h-3 w-3 mr-1.5' />, text: 'Stay Focused' },
							{ icon: <Shield className='h-3 w-3 mr-1.5' />, text: 'Work Confidently' },
						].map((badge, index) => (
							<motion.div
								key={badge.text}
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.4 + index * 0.1, ease: 'easeOut' }}
							>
								<Badge
									variant='secondary'
									className='text-sm py-1.5 px-3'
								>
									{badge.icon}
									{badge.text}
								</Badge>
							</motion.div>
						))}
					</motion.div>

					{/* Primary Download Button */}
					<motion.div
						className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								size='lg'
								asChild
								className='text-lg px-8 py-6'
							>
								<a href={getDownloadUrl(primaryDownload?.filename || downloadOptions[0].filename)}>
									{primaryDownload?.icon}
									<span className='ml-2'>Download for {primaryDownload?.name}</span>
									<ArrowRight className='h-5 w-5 ml-2' />
								</a>
							</Button>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								variant='outline'
								size='lg'
								asChild
								className='text-lg px-8 py-6'
							>
								<a
									href='https://github.com/nikitalobanov12/dayflow'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Github className='h-5 w-5 mr-2' />
									View on GitHub
								</a>
							</Button>
						</motion.div>
					</motion.div>

					<motion.p
						className='text-sm text-muted-foreground'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 2.0, ease: 'easeOut' }}
					>
						{primaryDownload?.size} • {primaryDownload?.description}
					</motion.p>
				</div>
			</section>

			{/* Features Section */}
			<section
				id='features'
				className='py-24'
			>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-100px' }}
					>
						<h2 className='text-3xl md:text-5xl font-bold mb-6'>Everything you need to stay focused</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>DayFlow combines the best of task management, time tracking, and privacy-first design in a beautiful native desktop application.</p>
					</motion.div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
								viewport={{ once: true, margin: '-50px' }}
								whileHover={{
									y: -5,
									transition: { duration: 0.2 },
								}}
							>
								<Card className='border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg h-full'>
									<CardHeader>
										<motion.div
											className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4'
											whileHover={{
												scale: 1.1,
												rotate: 5,
												transition: { duration: 0.2 },
											}}
										>
											{feature.icon}
										</motion.div>
										<CardTitle className='text-xl'>{feature.title}</CardTitle>
										<CardDescription className='text-base'>{feature.description}</CardDescription>
									</CardHeader>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Screenshots Section */}
			<section className='py-24 bg-muted/20'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-100px' }}
					>
						<h2 className='text-3xl md:text-5xl font-bold mb-6'>See DayFlow in action</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>Clean, intuitive interface designed for productivity. Experience the power of native desktop performance with modern design principles.</p>
					</motion.div>

					{/* Main Kanban Screenshot - Full Width */}
					<motion.div
						className='mb-6 max-w-6xl mx-auto'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
						whileHover={{ y: -5, transition: { duration: 0.3 } }}
					>
						<Card className='overflow-hidden pt-0 hover:shadow-xl transition-shadow duration-300'>
							<motion.img
								src='/dayflow-kanban.png'
								alt='DayFlow Kanban Board'
								className='w-full h-auto object-cover'
								whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
							/>
							<CardContent className='p-6'>
								<CardTitle className='mb-2'>Visual Task Management</CardTitle>
								<CardDescription>Organize your work with intuitive drag-and-drop boards. See everything at a glance with four columns: Backlog → This Week → Today → Done</CardDescription>
							</CardContent>
						</Card>
					</motion.div>

					{/* First Row: Deep Focus & Quick Task Creation (2 columns each) */}
					<motion.div
						className='mb-6 max-w-6xl mx-auto'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{/* Deep Focus */}
							<motion.div whileHover={{ y: -5, transition: { duration: 0.3 } }}>
								<Card className='overflow-hidden h-min p-0 hover:shadow-lg transition-shadow duration-300'>
									<motion.img
										src='/focus-sprint-mode.png'
										alt='Focus Sprint Mode'
										className='w-full h-auto object-cover'
										whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
									/>
									<CardContent className='p-6'>
										<CardTitle className='mb-2'>Deep Focus</CardTitle>
										<CardDescription>Distraction-free timer to track your tasks</CardDescription>
									</CardContent>
								</Card>
							</motion.div>

							{/* Quick Task Creation */}
							<motion.div whileHover={{ y: -5, transition: { duration: 0.3 } }}>
								<Card className='overflow-hidden h-min p-0 hover:shadow-lg transition-shadow duration-300'>
									<motion.img
										src='/new-task.png'
										alt='Create New Task'
										className='w-full h-auto object-cover'
										whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
									/>
									<CardContent className='p-6'>
										<CardTitle className='mb-2'>Quick Task Creation</CardTitle>
										<CardDescription>Add tasks in seconds with our streamlined creation interface</CardDescription>
									</CardContent>
								</Card>
							</motion.div>
						</div>
					</motion.div>

					{/* Second Row: Sprint Mode (1 column) & Smart Configuration (3 columns) */}
					<motion.div
						className='max-w-6xl mx-auto'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
							{/* Smart Configuration */}
							<motion.div
								className='md:col-span-3'
								whileHover={{ y: -5, transition: { duration: 0.3 } }}
							>
								<Card className='overflow-hidden p-0 h-min hover:shadow-lg transition-shadow duration-300'>
									<motion.img
										src='/configure-sprint.png'
										alt='Configure Sprint Settings'
										className='w-full h-auto object-cover'
										whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
									/>
									<CardContent className='p-6'>
										<CardTitle className='mb-2'>Smart Sprint Configuration</CardTitle>
										<CardDescription>Customize your perfect workflow with detailed settings for sprint duration, break times, and task selection</CardDescription>
									</CardContent>
								</Card>
							</motion.div>

							{/* Sprint Mode */}
							<motion.div
								className='md:col-span-1'
								whileHover={{ y: -5, transition: { duration: 0.3 } }}
							>
								<Card className='overflow-hidden p-0 h-min hover:shadow-lg transition-shadow duration-300'>
									<motion.img
										src='/sprint-mode.png'
										alt='Sprint Mode Interface'
										className='w-full h-auto object-cover'
										whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
									/>
									<CardContent className='p-6'>
										<CardTitle className='mb-2'>Sprint Mode</CardTitle>
										<CardDescription>Focus sessions with timed breaks</CardDescription>
									</CardContent>
								</Card>
							</motion.div>
						</div>
					</motion.div>

					<motion.div
						className='my-6 max-w-6xl mx-auto'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
						whileHover={{ y: -5, transition: { duration: 0.3 } }}
					>
						<Card className='overflow-hidden pt-0 hover:shadow-xl transition-shadow duration-300'>
							<motion.video
								controls
								className='w-full aspect-video object-cover'
								poster='/dayflow-kanban.png'
								whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
							>
								<source
									src='/demo-video.mp4'
									type='video/mp4'
								/>
								Your browser does not support the video tag.
							</motion.video>
							<CardContent className='p-6'>
								<CardTitle className='mb-2'>Complete Walkthrough</CardTitle>
								<CardDescription>Watch how DayFlow transforms your daily workflow from chaos to clarity</CardDescription>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</section>

			{/* Download Section */}
			<section
				id='download'
				className='py-24'
			>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-100px' }}
					>
						<h2 className='text-3xl md:text-5xl font-bold mb-6'>Download for your platform</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>Choose the right version for your operating system. All versions include the same powerful features with native performance optimization.</p>
					</motion.div>

					<div className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
						{downloadOptions.map((option, index) => (
							<motion.div
								key={option.platform}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
								viewport={{ once: true, margin: '-50px' }}
								whileHover={{
									y: -10,
									transition: { duration: 0.3 },
								}}
							>
								<Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl h-full ${option.platform === detectedPlatform ? 'ring-2 ring-primary' : ''}`}>
									{option.platform === detectedPlatform && (
										<motion.div
											initial={{ scale: 0, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											transition={{ duration: 0.3, delay: 0.5 }}
										>
											<Badge className='absolute top-4 right-4'>Recommended</Badge>
										</motion.div>
									)}
									<CardHeader className='text-center'>
										<motion.div
											className='h-16 w-16 flex items-center justify-center mx-auto mb-4'
											whileHover={{
												scale: 1.1,
												rotate: 5,
												transition: { duration: 0.2 },
											}}
										>
											{option.icon}
										</motion.div>
										<CardTitle className='text-2xl'>{option.name}</CardTitle>
										<CardDescription>{option.description}</CardDescription>
									</CardHeader>
									<CardContent className='text-center space-y-4'>
										<div className='text-sm text-muted-foreground'>
											<p>{option.size}</p>
										</div>
										<motion.div
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<Button
												asChild
												className='w-full'
												size='lg'
											>
												<a href={getDownloadUrl(option.filename)}>
													<Download className='h-4 w-4 mr-2' />
													Download
												</a>
											</Button>
										</motion.div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

					{/* Additional Linux Option */}
					<motion.div
						className='mt-8 text-center'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<p className='text-sm text-muted-foreground mb-4'>Linux users can also download the Debian package:</p>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								variant='outline'
								asChild
							>
								<a href={getDownloadUrl('dayflow_0.1.0_amd64.deb')}>
									<Download className='h-4 w-4 mr-2' />
									Download .deb (5.46 MB)
								</a>
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<motion.footer
				className='border-t border-border/40 py-12'
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true, margin: '-50px' }}
			>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
						<motion.div
							className='flex items-center gap-3'
							initial={{ x: -20, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
							viewport={{ once: true }}
						>
							<img
								src='/logo.svg'
								alt='DayFlow'
								className='h-6 w-6'
							/>
							<span className='font-semibold'>DayFlow</span>
							<span className='text-sm text-muted-foreground'>v0.1.0</span>
						</motion.div>

						<motion.div
							className='flex items-center gap-6'
							initial={{ x: 20, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
							viewport={{ once: true }}
						>
							<motion.a
								href='https://github.com/nikitalobanov12/dayflow'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2'
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							>
								<Github className='h-4 w-4' />
								Open Source
							</motion.a>
							<motion.a
								href='https://github.com/nikitalobanov12/dayflow/releases'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-foreground transition-colors'
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							>
								Release Notes
							</motion.a>
						</motion.div>
					</div>
				</div>
			</motion.footer>
		</div>
	);
}

export default App;
