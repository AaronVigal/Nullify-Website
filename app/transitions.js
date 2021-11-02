export default function(){
	// Index starting transitions ------------------------------------------------------
    this.transition(
      this.fromRoute('index'),
      this.toRoute('about'),
      this.use('toLeft'),
      this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('calendar'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('calendar'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('contact'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('resources'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('hsctf'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('sponsors'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	// About starting transitions ------------------------------------------------------
	this.transition(
		this.fromRoute('about'),
		this.toRoute('index'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('about'),
		this.toRoute('calendar'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('about'),
		this.toRoute('posts'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('about'),
		this.toRoute('contact'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('about'),
		this.toRoute('resources'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('about'),
		this.toRoute('hsctf'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('about'),
		this.toRoute('sponsors'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	// Calendar starting transitions ---------------------------------------------------
	this.transition(
		this.fromRoute('calendar'),
		this.toRoute('index'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('calendar'),
		this.toRoute('about'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('calendar'),
		this.toRoute('posts'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('calendar'),
		this.toRoute('contact'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('calendar'),
		this.toRoute('resources'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('calendar'),
		this.toRoute('hsctf'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('calendar'),
		this.toRoute('sponsors'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	// Blog (posts) starting transitions ---------------------------------------------------
	this.transition(
		this.fromRoute('posts'),
		this.toRoute('index'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('posts'),
		this.toRoute('about'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('posts'),
		this.toRoute('calendar'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('posts'),
		this.toRoute('contact'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('posts'),
		this.toRoute('resources'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('posts'),
		this.toRoute('hsctf'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('posts'),
		this.toRoute('sponsors'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	// Contact starting transitions ----------------------------------------------------
	this.transition(
		this.fromRoute('contact'),
		this.toRoute('index'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('contact'),
		this.toRoute('about'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('contact'),
		this.toRoute('calendar'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('contact'),
		this.toRoute('posts'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('contact'),
		this.toRoute('resources'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('contact'),
		this.toRoute('hsctf'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('contact'),
		this.toRoute('sponsors'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	// Resources starting transitions --------------------------------------------------
	this.transition(
		this.fromRoute('resources'),
		this.toRoute('index'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('resources'),
		this.toRoute('about'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('resources'),
		this.toRoute('calendar'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('resources'),
		this.toRoute('posts'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('resources'),
		this.toRoute('contact'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('resources'),
		this.toRoute('hsctf'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('resources'),
		this.toRoute('sponsors'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	// This is the form where users can submit resources
	this.transition(
		this.fromRoute('resources'),
		this.toRoute('contribute'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	// hsctf starting transitions ------------------------------------------------------
	this.transition(
		this.fromRoute('hsctf'),
		this.toRoute('index'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('hsctf'),
		this.toRoute('about'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('hsctf'),
		this.toRoute('calendar'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('hsctf'),
		this.toRoute('posts'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('hsctf'),
		this.toRoute('contact'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('hsctf'),
		this.toRoute('resources'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('hsctf'),
		this.toRoute('sponsors'),
		this.use('toLeft'),
		this.reverse('toRight')
	);
	
	// Sponsors starting transitions ---------------------------------------------------
	this.transition(
		this.fromRoute('sponsors'),
		this.toRoute('index'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('sponsors'),
		this.toRoute('about'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('sponsors'),
		this.toRoute('calendar'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('sponsors'),
		this.toRoute('posts'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('sponsors'),
		this.toRoute('contact'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('sponsors'),
		this.toRoute('resources'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('sponsors'),
		this.toRoute('hsctf'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	// Contribute transitions ---------------------------------------------------
	this.transition(
		this.fromRoute('contribute'),
		this.toRoute('contribute.index'),
		this.use('toLeft'),
		this.reverse('toRight')
	); 

	this.transition(
		this.fromRoute('contribute.index'),
		this.toRoute('contribute.resource-name'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('contribute.resource-name'),
		this.toRoute('contribute.resource-url'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('contribute.resource-url'),
		this.toRoute('contribute.resource-tags'),
		this.use('toLeft'),
		this.reverse('toRight')
	);
}
