@ $mol_replace
class $mol_app_demo extends $mol.$mol_app_demo {
	
	@ $jin2_grab
	child() {
		return this.atom( () => {
			var screens = []
			for( var id in $mol ) {
				if( id === '$mol_app_demo' ) continue
				if( !/_demo$/.test( id ) ) continue
				screens.push( this.screen( id ).get() )
			}
			return screens
		} )
	}
	
	@ $jin2_grab
	screen( id : string ) { return (new $mol_app_demo_screen).setup( _ => {
		_.title = () => this.prop( id )
		_.content = () => this.widget( id )
	} ) }
	
	@ $jin2_grab
	widget( id : string ) { return new $mol[ id ] }
	
}

@ $mol_replace
class $mol_app_demo_screen extends $mol.$mol_app_demo_screen {
	
	@ $jin2_grab
	expanded() {
		var state = this.persist<boolean>( 'expanded' )
		return this.prop( () => !!state.get() , next => state.set( next ) )
	}
	
}