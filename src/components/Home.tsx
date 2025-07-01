import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { 
	Monitor, 
	Calendar,
	Zap,
	Target,
	Check,
	X
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function Home() {
	const [isMobile, setIsMobile] = useState(false);
	const [billingCycle, setBillingCycle] = useState('monthly');

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const problemsWithOldWay = [
		{ icon: <X className='h-5 w-5' />, title: 'Endless task lists', description: 'Never-ending to-dos that pile up without progress' },
		{ icon: <X className='h-5 w-5' />, title: 'Forgotten goals', description: 'Big dreams that get buried under daily busywork' },
		{ icon: <X className='h-5 w-5' />, title: 'Shiny object syndrome', description: 'Jumping between goals without finishing anything' },
		{ icon: <X className='h-5 w-5' />, title: 'Planning paralysis', description: 'Spending hours organizing instead of executing' },
	];

	const dayflowSolutions = [
		{ icon: <Check className='h-5 w-5' />, title: 'AI Life Architect', description: 'Intelligent daily planning that aligns with your goals' },
		{ icon: <Check className='h-5 w-5' />, title: 'Goal-driven tasks', description: 'Every task connects to your bigger picture' },
		{ icon: <Check className='h-5 w-5' />, title: 'Focus enforcement', description: 'AI keeps you on track and prevents goal-switching' },
		{ icon: <Check className='h-5 w-5' />, title: 'Instant execution', description: 'Know exactly what to work on, when to work on it' },
	];

	const transformationFeatures = [
		{
			image: '/screenshots/mental-chaos.png',
			title: 'Stop the Mental Chaos',
			before: 'Constantly wondering "what should I work on next?"',
			after: 'AI tells you exactly what to do and when',
			description: 'DayFlow\'s AI Life Architect analyzes your goals, deadlines, and priorities to build your perfect day. No more decision fatigue.'
		},
		{
			image: '/screenshots/hit-goals.webp',
			title: 'Actually Hit Your Goals',
			before: 'Goals that stay dreams forever',
			after: 'Clear daily actions that move you forward',
			description: 'Connect every task to your long-term goals. See exactly how today\'s work builds tomorrow\'s success.'
		},
		{
			image: '/screenshots/shiny-object.webp',
			title: 'Beat Shiny Object Syndrome',
			before: 'Jumping between projects without finishing',
			after: 'Laser focus on what matters most',
			description: 'Sprint Mode blocks distractions and keeps you locked on your most important work until it\'s done.'
		},
		{
			image: '/screenshots/momentum.webp',
			title: 'Build Unstoppable Momentum',
			before: 'Starting over every Monday',
			after: 'Consistent progress that compounds',
			description: 'Watch your goals become inevitable as DayFlow turns your ambitions into automated daily habits.'
		}
	];

	const pricingPlans = [
		{
			name: 'DayFlow Free',
			cost: '$0',
			period: '/month',
			description: 'Full productivity features with a limited number of AI requests per month.',
			features: [
				'Unlimited tasks, goals & projects',
				'Full Kanban workflow system',
				'Calendar View for planning your day',
				'Sprint Mode & Focus sessions',
				'Google Calendar integration',
				'Complete timer & analytics',
				'30 AI requests per month',
				'Free onboarding quiz',
			],
			badge: null,
		},
		{
			name: 'DayFlow Pro',
			features: [
				'AI Life Architect - Intelligent daily planning',
				'Unlimited goals, tasks, and projects',
				'Advanced AI scheduling with goal alignment',
				'Sprint Mode for deep work sessions',
				'Google Calendar integration',
				'Advanced analytics and insights',
				'Goal-driven task prioritization',
				'Habit tracking and automation',
				'Priority support',
				'Full unrestricted access to AI features',
			],
			monthlyCost: '$15',
			monthlyPeriod: '/month',
			monthlyDescription: 'The complete AI life management system for ambitious achievers.',
			yearlyCost: '$120',
			yearlyPeriod: '/year',
			yearlyDescription: 'Best value for serious achievers, saving $60/year with annual billing.',
			badge: 'Most Popular',
		},
	];

	const testimonials = [
		{
			quote: "As someone who is very ambitious with a lot on my plate, I'm often overwhelmed by just how much i have to do. Dayflow fixes that entirely by breaking up huge goals into small actionable steps that push the needle.",
			author: "Alex Chen",
			role: "Software Engineer"
		},
		{
			quote: "I went from feeling overwhelmed every morning to knowing exactly what to work on. Game changer.",
			author: "Sarah Martinez", 
			role: "Marketing Director"
		},
		{
			quote: "Dayflow helps me save at least 12 hours a week that would've been otherwise spent manually figuring out my schedule, context switching, and trying to think about how to actually tackle my goals.",
			author: "David Kim",
			role: "Startup Founder"
		}
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
				<div className="container mx-auto px-4 h-16 flex items-center justify-between md:grid md:grid-cols-3">
					<motion.div
						className='flex items-center gap-3'
						initial={{ x: isMobile ? 0 : -20, opacity: 0 }}
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
						className='hidden md:flex items-center gap-6 justify-center'
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
					{/* 	<a
							href='#use-cases'
							className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
						>
							Use Cases
						</a> */}
						<a
							href='#integrations'
							className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
						>
							Integrations
						</a>
						<a
							href='#testimonials'
							className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
						>
							Testimonials
						</a>
						<a
							href='#pricing'
							className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
						>
							Pricing
						</a>
					</motion.nav>
					<motion.div
						className='flex items-center gap-3 justify-end'
						initial={{ x: isMobile ? 0 : 20, opacity: 0 }}
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
								aria-label='Sign in to DayFlow'
							>
								Sign In
							</a>
						</Button>
					</motion.div>
				</div>
			</motion.header>

			{/* Hero Section */}
			<section className='relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/20'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center'>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
						>
							{/* Product Hunt Tag */}
							<div className="flex justify-center mb-6">
								<a href="https://www.producthunt.com/products/dayflow-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-dayflow-2" target="_blank" rel="noopener noreferrer">
									<img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=985763&theme=dark&t=1751315403409" alt="DayFlow - Stop Planning Your Day Start Living It. | Product Hunt" className="producthunt-badge" width="250" height="54" />
								</a>
							</div>
							<h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight'>
								<span className='text-foreground'>Turn Your Goals</span>
								<br />
								<span className='bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>Into Actions.</span>
							</h1>

							<p className='text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed'>
								An AI that plans your days around your goals. Automatically schedules tasks, manages your calendar, and keeps you focused on what matters most. Stop planning and start executing.
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
										className='px-8 py-4 text-base'
									>
										<a
											href='https://app.dayflow.ca'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Monitor className='h-5 w-5 mr-2' />
											Try DayFlow for Free
										</a>
									</Button>
								</motion.div>
							</motion.div>

							{/* Social Proof */}
							<motion.div
								className='flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-12'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
							>
								<div className='flex items-center gap-2'>
									<Calendar className='h-4 w-4' />
									<span>Google Calendar Integration</span>
								</div>
								<div className='flex items-center gap-2'>
									<Zap className='h-4 w-4' />
									<span>AI Task Scheduling</span>
								</div>
								<div className='flex items-center gap-2'>
									<Target className='h-4 w-4' />
									<span>Goal-Based Planning</span>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className='py-24 bg-muted/30'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge variant='secondary' className='mb-4'>Simple Process</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>How DayFlow Works</h2>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
							Connect your goals to your calendar. AI handles the planning, scheduling, and prioritization automatically.
						</p>
					</motion.div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
						{[
							{
								step: '01',
								title: 'Define Your Ambitions',
								description: 'Tell DayFlow what you want to achieve. Big goals, small goals, work goals, life goals.',
								icon: <Target className='h-8 w-8' />
							},
							{
								step: '02', 
								title: 'AI Breaks It Down',
								description: 'Our AI Life Architect automatically creates actionable tasks that move you toward your goals.',
								icon: <Zap className='h-8 w-8' />
							},
							{
								step: '03',
								title: 'Smart Daily Schedule',
								description: 'Get a personalized daily plan that fits your calendar and priorities. No more wondering what to work on.',
								icon: <Calendar className='h-8 w-8' />
							},
							{
								step: '04',
								title: 'Execute & Win',
								description: 'Follow your AI-generated plan. Watch your goals become inevitable as you build unstoppable momentum.',
								icon: <Check className='h-8 w-8' />
							}
						].map((item, index) => (
							<motion.div
								key={item.step}
								className='text-center'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
								viewport={{ once: true, margin: '-50px' }}
							>
								<div className='relative mb-6'>
									<div className='w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4'>
										{item.icon}
									</div>
								</div>
								<h3 className='text-xl font-bold mb-3'>{item.title}</h3>
								<p className='text-muted-foreground leading-relaxed'>{item.description}</p>
							</motion.div>
						))}
					</div>

					<motion.div
						className='text-center mt-12'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Problem vs Solution */}
			<section id='features' className='py-24'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge variant='secondary' className='mb-4'>Stop the Chaos</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>Your Current Planning System vs DayFlow</h2>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
							Manual planning takes hours. You forget about goals. Tasks pile up without priority. DayFlow automates all of this.
						</p>
					</motion.div>

					<div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
						{/* Old Way */}
						<motion.div
							initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<div 
								className='rounded-xl p-8 border border-red-500 dark:border-red-800'
								style={{ 
									backgroundColor: 'var(--card)', 
									color: 'var(--card-foreground)' 
								}}
							>
								<h3 className='text-xl font-bold mb-6' style={{ color: 'var(--card-foreground)' }}>Your Current Struggle</h3>
								<div className='space-y-4'>
									{problemsWithOldWay.map((problem, index) => (
										<motion.div
											key={problem.title}
											className='flex items-start gap-3'
											initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{
												duration: 0.4,
												delay: index * 0.1,
												ease: 'easeOut',
											}}
											viewport={{ once: true }}
										>
											<div className='text-red-500 mt-1'>{problem.icon}</div>
											<div>
												<h4 className='font-semibold' style={{ color: 'var(--card-foreground)' }}>{problem.title}</h4>
												<p className='text-sm' style={{ color: 'var(--card-foreground)' }}>{problem.description}</p>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>

						{/* DayFlow Way */}
						<motion.div
							initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<div 
								className='rounded-xl p-8 border border-green-500 dark:border-green-800'
								style={{ 
									backgroundColor: 'var(--card)', 
									color: 'var(--card-foreground)' 
								}}
							>
								<h3 className='text-xl font-bold mb-6' style={{ color: 'var(--card-foreground)' }}>With DayFlow</h3>
								<div className='space-y-4'>
									{dayflowSolutions.map((solution, index) => (
										<motion.div
											key={solution.title}
											className='flex items-start gap-3'
											initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{
												duration: 0.4,
												delay: index * 0.1,
												ease: 'easeOut',
											}}
											viewport={{ once: true }}
										>
											<div className='text-green-500 mt-1'>{solution.icon}</div>
											<div>
												<h4 className='font-semibold' style={{ color: 'var(--card-foreground)' }}>{solution.title}</h4>
												<p className='text-sm' style={{ color: 'var(--card-foreground)' }}>{solution.description}</p>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Transformation Features */}
			<section id='use-cases' className='py-24'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge variant='secondary' className='mb-4'>Complete Transformation</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>Here's What Changes in Your Life</h2>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
							Stop wondering what to work on. Stop abandoning goals halfway through. Start building the life you actually want.
						</p>
					</motion.div>

					<div className='space-y-16 max-w-5xl mx-auto'>
						{transformationFeatures.map((feature, index) => (
							<motion.div
								key={feature.title}
								className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
								viewport={{ once: true, margin: '-50px' }}
							>
								<div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
									<h3 className='text-2xl font-bold mb-6'>{feature.title}</h3>
									<p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
										{feature.description}
									</p>
									<div className='space-y-3'>
										<div className='flex items-center gap-3'>
											<X className='h-4 w-4 text-red-500' />
											<span className='text-red-600 dark:text-red-400'>{feature.before}</span>
										</div>
										<div className='flex items-center gap-3'>
											<Check className='h-4 w-4 text-green-500' />
											<span className='text-green-600 dark:text-green-400 font-medium'>{feature.after}</span>
										</div>
									</div>
								</div>
								<div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
									<div className='bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-2 backdrop-blur border border-border/50 overflow-hidden'>
										<img
											src={feature.image}
											alt={feature.title}
											className='w-full h-auto rounded-lg shadow-xl'
										/>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Google Calendar Integration */}
			<section id='integrations' className='py-24 bg-muted/30'>
				<div className='container mx-auto px-4'>
					<div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
						<motion.div
							className='relative'
							initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<div className='bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 backdrop-blur border border-border/50'>
								<Calendar className='h-16 w-16 text-primary mb-6' />
								<div className='space-y-4'>
									<div className='flex items-center gap-3'>
										<div className='h-3 w-3 rounded-full bg-green-500' />
										<span className='text-sm'>Your calendar becomes goal-driven</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='h-3 w-3 rounded-full bg-blue-500' />
										<span className='text-sm'>Tasks automatically sync both ways</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='h-3 w-3 rounded-full bg-purple-500' />
										<span className='text-sm'>AI schedules around your meetings</span>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<Badge
								variant='secondary'
								className='mb-4'
							>
								<Calendar className='h-3 w-3 mr-1' />
								Smart Integrations
							</Badge>
							<h2 className='text-3xl md:text-4xl font-bold mb-6'>Your Schedule, Built by AI</h2>
							<p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
								DayFlow connects with Google Calendar and Google Gemini to create tasks and generate your schedule for you—automatically. No more manual planning, no more endless tweaking.
							</p>
							<p className='text-lg text-primary font-semibold mb-8 leading-relaxed'>
								What makes DayFlow different? It's not just AI—it's YOUR AI. Every plan is personalized to you, factoring in all your goals, habits, and priorities. You get a plug-and-play schedule that actually fits your life. No refinement required.
							</p>
							<div className='space-y-4'>
								{[
									'AI schedules your goal-related tasks around meetings',
									'Tasks with deadlines appear on your calendar automatically',
									'Change something in DayFlow, it updates in Google Calendar instantly',
									'Import all your Google Tasks and make them goal-driven',
									'Google Gemini integration: generate tasks and plans with a single click',
									'Plug-and-play schedule—no manual refinement needed',
								].map((item, index) => (
									<motion.div
										key={index}
										className='flex items-center gap-3'
										initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
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
					</div>
				</div>
			</section>

			{/* AI Integration Section */}
			<section className='py-24'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge variant='secondary' className='mb-4'>AI Integration</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>AI That Knows You</h2>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto mb-6'>
							DayFlow connects with Google Gemini to generate tasks and build your schedule for you—automatically. No more manual planning, no more endless tweaking.
						</p>
						<p className='text-lg text-primary font-semibold max-w-2xl mx-auto mb-8'>
							This isn't generic AI. DayFlow's Gemini-powered engine learns your goals, habits, and priorities to create a plug-and-play schedule that actually fits your life. No refinement required.
						</p>
					</motion.div>
					<div className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
						<motion.div
							className='bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 backdrop-blur border border-border/50 flex flex-col items-center justify-center'
							initial={{ opacity: 0, x: 0 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<Zap className='h-16 w-16 text-primary mb-6' />
							<h3 className='text-2xl font-bold mb-4'>Google Gemini Integration</h3>
							<p className='text-muted-foreground text-lg mb-2 text-center'>
								Instantly generate tasks and a daily plan with a single click. Let Gemini do the heavy lifting—no more decision fatigue.
							</p>
						</motion.div>
						<motion.div
							className='bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 backdrop-blur border border-border/50 flex flex-col items-center justify-center'
							initial={{ opacity: 0, x: 0 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<Target className='h-16 w-16 text-primary mb-6' />
							<h3 className='text-2xl font-bold mb-4'>Truly Personalized Planning</h3>
							<p className='text-muted-foreground text-lg mb-2 text-center'>
								Your schedule is built around your real goals, habits, and priorities. No more plug-and-pray—just plug and play. No refinement needed.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section id='testimonials' className='py-24'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge variant='secondary' className='mb-4'>Success Stories</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>From Scattered to Unstoppable</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							See how driven people like you transformed their productivity and finally achieved their goals.
						</p>
					</motion.div>

					<div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.author}
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
								<Card className='h-full transition-all duration-300 hover:shadow-lg'>
									<CardContent className='p-6'>
										<p className='text-muted-foreground mb-4 italic'>"{testimonial.quote}"</p>
										<div>
											<p className='font-semibold'>{testimonial.author}</p>
											<p className='text-sm text-muted-foreground'>{testimonial.role}</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id='pricing' className='py-24 bg-muted/30'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge variant='secondary' className='mb-4'>Simple Pricing</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>One Plan. All Features. No Limits.</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							Get the complete AI life management system for ambitious achievers, without the complexity.
						</p>
					</motion.div>

					<motion.div
						className='max-w-6xl mx-auto'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<div className='flex justify-center mb-8'>
							<ToggleGroup
								type='single'
								value={billingCycle}
								onValueChange={setBillingCycle}
								className='bg-muted rounded-lg p-1'
							>
								<ToggleGroupItem value='monthly' className='px-6 py-2 text-base data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm'>Monthly</ToggleGroupItem>
								<ToggleGroupItem value='yearly' className='px-6 py-2 text-base data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm'>Yearly <Badge variant='secondary' className='ml-2 text-primary-foreground bg-green-500'>Save $60</Badge></ToggleGroupItem>
							</ToggleGroup>
						</div>
						<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
							{pricingPlans.map((plan) => (
								<Card key={plan.name} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.badge && plan.name === 'DayFlow Pro' && billingCycle === 'yearly' ? 'border-2 border-primary' : ''}`}>
									{plan.badge && plan.name === 'DayFlow Pro' && billingCycle === 'yearly' && (
										<div className='absolute top-4 right-4'>
											<Badge className='bg-primary text-primary-foreground'>{plan.badge}</Badge>
										</div>
									)}
									<CardContent className='p-8'>
										<div className='text-center mb-8'>
											<h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
											<div className='flex items-baseline justify-center gap-2 mb-4'>
												<span className='text-4xl font-bold'>
													{plan.name === 'DayFlow Pro' ? 
														billingCycle === 'monthly' ? plan.monthlyCost : plan.yearlyCost
													: plan.cost}
												</span>
												<span className='text-muted-foreground'>
													{plan.name === 'DayFlow Pro' ? 
														billingCycle === 'monthly' ? plan.monthlyPeriod : plan.yearlyPeriod
													: plan.period}
												</span>
											</div>
											{plan.name === 'DayFlow Pro' && billingCycle === 'yearly' && (
												<div className='text-center'>
													<span className='text-sm text-muted-foreground'>or </span>
													<span className='text-lg font-semibold text-green-600'>$10/month billed yearly</span>
												</div>
											)}
											<p className='text-muted-foreground mt-2'>
												{plan.name === 'DayFlow Pro' ? 
													billingCycle === 'monthly' ? plan.monthlyDescription : plan.yearlyDescription
												: plan.description}
											</p>
										</div>

										<div className='space-y-3 mb-8'>
											{plan.features.map((feature, featureIndex) => (
												<motion.div
													key={feature}
													className='flex items-center gap-3'
													initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
													whileInView={{ opacity: 1, x: 0 }}
													transition={{
														duration: 0.4,
														delay: featureIndex * 0.05,
														ease: 'easeOut',
													}}
													viewport={{ once: true }}
												>
													<Check className='h-4 w-4 text-green-500 flex-shrink-0' />
													<span className='text-sm'>{feature}</span>
												</motion.div>
											))}
										</div>

										</CardContent>
								</Card>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Final CTA */}
			<section className='py-24'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center max-w-3xl mx-auto'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>Stop Starting Over. Start Finishing.</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							You have big goals. DayFlow makes sure you actually achieve them. Join ambitious people who stopped jumping between projects and started building the life they want.
						</p>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								asChild
								size='lg'
								className='px-8 py-4 text-base'
							>
								<a
									href='https://app.dayflow.ca'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Monitor className='h-4 w-4 mr-2' />
									Try DayFlow for Free
								</a>
							</Button>
						</motion.div>
						<p className='text-sm text-muted-foreground mt-4'>
							Free • No credit card required • Transform your goals into reality
						</p>
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
							initial={{ x: isMobile ? 0 : -20, opacity: 0 }}
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
						</motion.div>

						<motion.div
							className='flex items-center gap-6'
							initial={{ x: isMobile ? 0 : 20, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
							viewport={{ once: true }}
						>
							<motion.div
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							>
								<motion.a
									href='https://www.dayflow.ca/privacy-policy'
									className='text-muted-foreground hover:text-foreground transition-colors'
								>
									Privacy Policy
								</motion.a>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							>
								<motion.a
									href='https://www.dayflow.ca/terms-of-service'
									className='text-muted-foreground hover:text-foreground transition-colors'
								>
									Terms of Service
								</motion.a>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</motion.footer>
		</div>
	);
}