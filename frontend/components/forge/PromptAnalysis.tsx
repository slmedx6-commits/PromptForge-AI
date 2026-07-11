"use client";

interface Props {
  analysis: any;
}

export default function PromptAnalysis({
  analysis,
}: Props) {

  if (!analysis) return null;

  const stats = analysis.statistics || {};

  const quality = analysis.quality || {};

  return (

    <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6 text-white">

      <h2 className="mb-6 text-2xl font-bold">
        Prompt Analysis
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <AnalysisCard
          title="Prompt Score"
          value={`${quality.score ?? 0}/100`}
        />

        <AnalysisCard
          title="Intent"
          value={analysis.predicted_intent}
        />

        <AnalysisCard
          title="Category"
          value={analysis.predicted_category}
        />

        <AnalysisCard
          title="Complexity"
          value={analysis.predicted_complexity}
        />

        <AnalysisCard
          title="Word Count"
          value={stats.word_count}
        />

        <AnalysisCard
          title="Character Count"
          value={stats.character_count}
        />

        <AnalysisCard
          title="Sentence Count"
          value={stats.sentence_count}
        />

        <AnalysisCard
          title="Average Word Length"
          value={stats.average_word_length}
        />

        <AnalysisCard
          title="Reading Time"
          value={stats.reading_time}
        />

        <AnalysisCard
          title="Readability"
          value={stats.readability}
        />

        <AnalysisCard
          title="Keyword Density"
          value={`${stats.keyword_density}%`}
        />

        <AnalysisCard
          title="Uniqueness"
          value={`${stats.uniqueness}%`}
        />

      </div>

      {analysis.suggestions?.length > 0 && (

        <div className="mt-8">

          <h3 className="mb-3 text-lg font-semibold">
            Suggestions
          </h3>

          <ul className="space-y-2">

            {analysis.suggestions.map(
              (
                item: string,
                index: number
              ) => (

                <li
                  key={index}
                  className="rounded-lg bg-slate-800 p-3"
                >
                  • {item}
                </li>

              )
            )}

          </ul>

        </div>

      )}

    </div>

  );

}

interface CardProps {
  title: string;
  value: any;
}

function AnalysisCard({
  title,
  value,
}: CardProps) {

  return (

    <div className="rounded-xl bg-slate-800 p-4">

      <p className="text-sm text-slate-400">

        {title}

      </p>

      <p className="mt-2 text-xl font-bold">

        {value ?? "-"}

      </p>

    </div>

  );

}