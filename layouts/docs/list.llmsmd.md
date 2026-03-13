{{- $content := .RawContent -}}
{{- $content = replaceRE `\{\{[<%][^}]*?[%>]\}\}` "" $content -}}
{{- $content = replaceRE `(?m)^\s+$` "" $content -}}
# {{ .Title }}

URL: {{ .Permalink }}
{{ with .Description }}
> {{ . | safeHTML }}
{{ end }}
{{ $content | safeHTML }}
## Pages in this section
{{ range .Pages -}}
- [{{ .Title }}]({{ .Permalink }}): {{ .Description | safeHTML }}
{{ end -}}
