import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
	name: '',
	url: '',
	tags: A([]),
	progressValue: 0,
	init() {
		this._super(...arguments);
		// this.set('tags', this.store.findAll('tag').copy())
		this.store.findAll('tag').then((res) => {
			// tags = { ...tags } // shallow clone
			let tags = res.toArray();
			this.set('tags', tags);
		});
	},
	actions: {
		add() {
			var id = '';
			var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			var charactersLength = characters.length;
			for (var i = 0; i < 20; i++) {
				id += characters.charAt(Math.floor(Math.random() * charactersLength));
			}

			let controller = this;
			// console.log('addiing' + controller.get('name') + " at " + controller.get('url'))
			this.store.createRecord('suggestedresource', {
				id: id,
				name: controller.get('name'),
				url: controller.get('url'),
			}).save();
		},
		dragEnd({ sourceList, sourceIndex, sourceArgs, targetList, targetIndex, targetArgs }) {
			const unsortableList = this.get('tags')
			if (targetList !== unsortableList) {
				let tag = sourceList.objectAt(sourceIndex);
				let resource = targetArgs.resource;
				resource.get('tags').pushObject(tag);
				resource.save();
				tag.save();
			}
			return
		},
		determineForeignPosition({/*draggedItem, */items }) {
			return items.length
		},
		progress() {
			// console.log(this.get('model.progress'))
			this.set('model.progress', (this.get('model.progress') + 1))
		},
		digress() {
			// console.log('2 THIS IS REALLY GOOD THIS IS THE PARENT FUNCTION CLL')
			this.set('model.progress', (this.get('model.progress') - 1))
		}
	}
});
