import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { A } from '@ember/array';

export default Controller.extend({
	queryParams: ['search'],
	search: '',
	filterTags: A([]),
	filtered: computed('search', 'model.resources', 'filterTags.[]', function () {
		const resources = this.get('model.resources');
		const search = this.get('search').toLowerCase();
		let tags = this.get('filterTags');
		// console.log(tags)

		// TODO: Filter by tag

		if (isEmpty(search)) { 
			return resources.sortBy('uses'); 
		}

		return resources.filter(function (resources) {
			return resources.get('name').toLowerCase().match(search) || resources.get('url').toLowerCase().match(search);
		})
	}), 
	actions: {
		addTag(tag) {
			this.get('filterTags').addObject(tag);
			// this.set('filterTags', ["TEST"])
		},
		removeTag(tag) {
			this.get('filterTags').removeObject(tag);
		},
		async usedResource(resource) {
			resource.set('uses', resource.get('uses') + 1);
			resource.save();
		},
	}
});
