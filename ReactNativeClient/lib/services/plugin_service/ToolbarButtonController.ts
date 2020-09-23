import ViewController from './ViewController';

export enum ToolbarButtonLocation {
	NoteToolbar = 'noteToolbar',
	EditorToolbar = 'editorToolbar',
}

export default class ToolbarButtonController extends ViewController {

	constructor(id:string, pluginId:string, store:any, commandName:string, location:ToolbarButtonLocation) {
		super(id, pluginId, store);

		this.store.dispatch({
			type: 'PLUGIN_VIEW_ADD',
			pluginId: pluginId,
			view: {
				id: this.id,
				type: this.type,
				commandName: commandName,
				location: location,
			},
		});
	}

	public get type():string {
		return 'toolbarButton';
	}

}
