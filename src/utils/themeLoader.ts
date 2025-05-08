const tenant = import.meta.env.VITE_TENANT;

export async function loadTheme() {
  try {
    if (tenant) {
      console.log('Trying to load theme for: ', tenant);
      // Try to load tenant-specific theme
      await import(/* @vite-ignore */ `/src/tenants/${tenant}/styles/themes/_index.scss`);
      console.log('Loaded tenant-specific theme: ', tenant);
    } else {
      // Load default theme
      await import(/* @vite-ignore */ '/src/core/styles/themes/_index.scss');
      console.log('Loaded default theme');
    }
  } catch (error) {
    console.warn(`Failed to load tenant-specific theme, falling back to default theme`, error);
    await import(/* @vite-ignore */ '/src/core/styles/themes/_index.scss');
  }
}
