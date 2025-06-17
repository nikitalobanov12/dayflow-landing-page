import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Download, Github, Users, Shield, Timer, Star, Monitor, Trello } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

// Define platform types for downloads
type Platform = 'windows' | 'macos' | 'linux' | 'ios';

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

export function Home() {
	const [detectedPlatform, setDetectedPlatform] = useState<Platform>('windows');

	// Auto-detect user's operating system
	useEffect(() => {
		const userAgent = navigator.userAgent.toLowerCase();
		const isIOS = /ipad|iphone|ipod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

		if (isIOS) {
			setDetectedPlatform('ios');
		} else if (userAgent.includes('mac')) {
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
			filename: 'dayflow_0.1.0_x64_en-US.msi',
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
							variant='outline'
							className='hidden sm:inline-flex hover-lift'
						>
							<a
								href='https://app.dayflow.ca'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Sign in to DayFlow Web App'
							>
								Sign In
							</a>
						</Button>
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
			<section className='relative py-24 md:py-32 bg-gradient-to-br from-background via-background to-muted/20'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center'>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
						>
							<Badge
								variant='secondary'
								className='mb-6 text-xs px-3 py-1'
							>
								<Star className='h-3 w-3 mr-1 fill-current' />
								Free & Open Source
							</Badge>

							<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight'>
								<span className='text-foreground'>Stay Focused.</span>
								<br />
								<span className='bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>Get Things Done.</span>
							</h1>

							<p className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed'>
								A beautiful, distraction-free task manager that helps you focus on what matters. Built for privacy, designed for productivity.
							</p>

							<motion.div
								className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
							>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										asChild
										size='lg'
										className='text-lg px-8 py-6 h-auto'
									>
										<a href={getDownloadUrl(primaryDownload?.filename || downloadOptions[0].filename)}>
											<Download className='h-5 w-5 mr-2' />
											Download for {primaryDownload?.name || 'Windows'}
										</a>
									</Button>
								</motion.div>

								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										asChild
										variant='outline'
										size='lg'
										className='text-lg px-8 py-6 h-auto'
									>
										<a
											href='https://app.dayflow.ca'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Monitor className='h-5 w-5 mr-2' />
											Try Web Version
										</a>
									</Button>
								</motion.div>
							</motion.div>
						</motion.div>

						{/* Demo Video/Screenshot */}
						<motion.div
							className='relative max-w-4xl mx-auto'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
						>
							<div className='relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur border border-border/50'>
								<video
									autoPlay
									muted
									loop
									playsInline
									className='w-full h-auto'
									poster='/dayflow-kanban.png'
								>
									<source
										src='/demo-video.mp4'
										type='video/mp4'
									/>
									<img
										src='/dayflow-kanban.png'
										alt='DayFlow Demo'
										className='w-full h-auto'
									/>
								</video>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section
				id='features'
				className='py-24 bg-muted/30'
			>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>Everything you need to stay productive</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							DayFlow combines the best of task management with focus techniques to help you achieve more with less stress.
						</p>
					</motion.div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
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
								<Card className='text-center h-full transition-all duration-300 hover:shadow-lg'>
									<CardContent className='p-6'>
										<motion.div
											className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary'
											whileHover={{
												scale: 1.1,
												rotate: 5,
												transition: { duration: 0.2 },
											}}
										>
											{feature.icon}
										</motion.div>
										<h3 className='text-lg font-semibold mb-3'>{feature.title}</h3>
										<p className='text-muted-foreground text-sm leading-relaxed'>{feature.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Sprint Mode Showcase */}
			<section className='py-24'>
				<div className='container mx-auto px-4'>
					<div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<Badge
								variant='secondary'
								className='mb-4'
							>
								<Timer className='h-3 w-3 mr-1' />
								Sprint Mode
							</Badge>
							<h2 className='text-3xl md:text-4xl font-bold mb-6'>Focus like never before</h2>
							<p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
								Sprint Mode helps you work in focused bursts with built-in breaks. Based on proven productivity techniques, it keeps you fresh and prevents burnout while maximizing your output.
							</p>
							<div className='space-y-4'>
								{[
									'Configure your ideal work and break intervals',
									'Visual progress tracking keeps you motivated',
									'Automatic notifications guide your focus sessions',
									'Analytics show your productivity patterns',
								].map((item, index) => (
									<motion.div
										key={index}
										className='flex items-center gap-3'
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.4,
											delay: index * 0.1,
											ease: 'easeOut',
										}}
										viewport={{ once: true }}
									>
										<div className='h-2 w-2 rounded-full bg-primary flex-shrink-0' />
										<span className='text-muted-foreground'>{item}</span>
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div
							className='relative'
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<div className='grid grid-cols-2 gap-4'>
								<motion.div
									whileHover={{
										scale: 1.05,
										transition: { duration: 0.2 },
									}}
								>
									<img
										src='/configure-sprint.png'
										alt='Configure Sprint Settings'
										className='rounded-lg shadow-lg'
									/>
								</motion.div>
								<motion.div
									whileHover={{
										scale: 1.05,
										transition: { duration: 0.2 },
									}}
								>
									<img
										src='/focus-sprint-mode.png'
										alt='Sprint Mode in Action'
										className='rounded-lg shadow-lg'
									/>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Download Section */}
			<section
				id='download'
				className='py-24 bg-muted/30'
			>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>Download DayFlow</h2>
						<p className='text-xl text-muted-foreground mb-8'>Available for all major platforms. Choose your preferred version below.</p>
					</motion.div>

					{detectedPlatform === 'ios' ? (
						// iOS-specific layout
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
							className='max-w-2xl mx-auto text-center'
						>
							<Card className='p-8'>
								<div className='mb-6'>
									<AppleIcon className='h-16 w-16 mx-auto text-muted-foreground' />
								</div>
								<h3 className='text-2xl font-bold mb-4'>iOS Version Coming Soon</h3>
								<p className='text-muted-foreground mb-8'>
									We're working on bringing DayFlow to iOS. In the meantime, try our web version or download the desktop app for your computer.
								</p>
								<div className='flex flex-col sm:flex-row gap-4 justify-center'>
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button
											asChild
											size='lg'
										>
											<a
												href='https://app.dayflow.ca'
												target='_blank'
												rel='noopener noreferrer'
											>
												<Monitor className='h-4 w-4 mr-2' />
												Try Web Version
											</a>
										</Button>
									</motion.div>
								</div>
							</Card>

							{/* Desktop options for iOS users */}
							<motion.div
								className='mt-12'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
								viewport={{ once: true, margin: '-50px' }}
							>
								<h4 className='text-lg font-semibold mb-6'>Or download for your desktop:</h4>
								<div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
									{downloadOptions.map((option, index) => (
										<motion.div
											key={option.platform}
											initial={{ opacity: 0, y: 30 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.4,
												delay: index * 0.1,
												ease: 'easeOut',
											}}
											viewport={{ once: true }}
											whileHover={{
												y: -5,
												transition: { duration: 0.2 },
											}}
										>
											<Card className='h-full hover:shadow-lg transition-all duration-300'>
												<CardContent className='text-center p-4'>
													<motion.div
														className='h-12 w-12 flex items-center justify-center mx-auto mb-3'
														whileHover={{
															scale: 1.1,
															transition: { duration: 0.2 },
														}}
													>
														{option.icon}
													</motion.div>
													<p className='font-medium mb-2'>{option.name}</p>
													<motion.div
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
													>
														<Button
															asChild
															className='w-full'
															size='sm'
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
							</motion.div>
						</motion.div>
					) : (
						// Regular download section for desktop platforms
						<>
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
						</>
					)}
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
							<motion.div
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							>
								<Link
									to='/privacy-policy'
									className='text-muted-foreground hover:text-foreground transition-colors'
								>
									Privacy Policy
								</Link>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							>
								<Link
									to='/terms-of-service'
									className='text-muted-foreground hover:text-foreground transition-colors'
								>
									Terms of Service
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</motion.footer>
		</div>
	);
} 